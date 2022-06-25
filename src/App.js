import Home from "./routes/home/home.components";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.components";

import SignIn from "./routes/authentication/authentication.components";

const Shop = () => {
  return <h1>I am the shop</h1>;
};
const App = () => {
  return (
    // Route takes 2 parameters Path and Element
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
