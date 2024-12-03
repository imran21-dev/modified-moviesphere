import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./layout/Home";


const App = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">
        <Outlet>
          <Home></Home>
        </Outlet>
      </div>

    </div>
  );
};

export default App;