const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 7000;
const app = express();
require("dotenv").config();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://restroflow-1b903.web.app",
  ],
  credentials: true,
};

//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieparser());

const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "Unauthorized access!" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: "Unauthorized access!" });
    }
    req.user = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bgu1g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const foodCollection = client.db("RestroFlow").collection("food");
    const purchaseCollection = client.db("RestroFlow").collection("purchase");

    //jwt
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "2hr",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    app.get("/top-foods", async (req, res) => {
      const result = await foodCollection
        .find()
        .sort({ purchaseCount: -1 })
        .limit(3)
        .toArray();
      res.send(result);
    });

    //all foods
    app.get("/all-foods", async (req, res) => {
      const filter = req.query;
      console.log(filter);
      const query = {
        foodName: { $regex: filter.search, $options: "i" },
      };
      const options = {
        sort: {
          price: filter.sort === "asc" ? 1 : -1,
        },
      };
      const result = await foodCollection.find(query, options).toArray();
      res.send(result);
    });

    app.get("/food/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await foodCollection.findOne(query);
      res.send(result);
    });

    //get food added by specific user
    app.get("/foods/:email", verifyToken, async (req, res) => {
      const tokenEmail = req.user?.email;
      const email = req.params.email;
      if (tokenEmail !== email) {
        res.status(401).send({ message: "Forbidden access!" });
      }
      const query = { "owner.email": email };
      const result = await foodCollection.find(query).toArray();
      res.send(result);
    });

    //get food purchased by specific user
    app.get("/purchased/:email", verifyToken, async (req, res) => {
      const tokenEmail = req.user?.email;
      const email = req.params.email;
      if (tokenEmail !== email) {
        res.status(401).send({ message: "Forbidden access!" });
      }
      const query = { email };
      const result = await purchaseCollection.find(query).toArray();
      res.send(result);
    });

    //update foods
    app.put("/food/:id", verifyToken, async (req, res) => {
      const foodData = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          ...foodData,
        },
      };
      const result = await foodCollection.updateOne(query, updatedDoc, options);
      res.send(result);
    });

    //delete foods
    app.delete("/foods/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await foodCollection.deleteOne(query);
      res.send(result);
    });

    // delete purchased food
    app.delete("/purchased/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await purchaseCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/food", async (req, res) => {
      const foodData = req.body;
      const result = await foodCollection.insertOne(foodData);
      res.send(result);
    });

    //post purchase data
    app.post("/purchase", async (req, res) => {
      const purchaseData = req.body;
      const result = await purchaseCollection.insertOne(purchaseData);
      const foodQuery = { _id: new ObjectId(purchaseData.foodId) };
      const updatedDoc = {
        $inc: {
          quantity: -purchaseData.purchasedQuantity,
          purchaseCount: purchaseData.purchasedQuantity,
        },
      };
      const updateQuantity = await foodCollection.updateOne(
        foodQuery,
        updatedDoc
      );
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("restroflow server running!");
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
