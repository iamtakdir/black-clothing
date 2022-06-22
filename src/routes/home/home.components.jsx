import Categories from "../../components/categories/categories.components";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Outlet />
      <Categories />
    </div>
  );
};

export default Home;
