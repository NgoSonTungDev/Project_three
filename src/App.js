import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import Service from "./pages/Service/Service";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" exact element={<Login />} /> 
    <Route path="/home" exact element={<Home />} /> 
    <Route path="/forgotPassword" exact element={<ForgotPassword />} /> 
    <Route path="/service" exact element={<Service />} /> 
    <Route path="/registerUser" exact element={<Register />} /> 
    <Route path="/notfound" exact element={<NotFound />} /> 
    {/* <Redirect to="/notfound" /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
