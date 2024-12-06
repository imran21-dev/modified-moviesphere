import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./layout/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/Footer";



const App = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">
        <Outlet>
          <Home></Home>
        </Outlet>
      </div>
     <Footer></Footer>
    </div>
  );
};

export default App;