import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import TopFoods from "../Components/TopFoods";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RestroFlow</title>
      </Helmet>
      <Banner />
      <TopFoods />
    </div>
  );
};

export default Home;
