import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./salary.scss";
import Navbar from "../../components/Navbar/Navbar";

const Salary = () => {
  const location = useLocation();

  useEffect(() => {
      var video = document.getElementById("video");
      if(location.pathname === "/service"){
        video.play();
      }
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="container_Salary">

      </div>
    </div>
  );
};

export default Salary;
