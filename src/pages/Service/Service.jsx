import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Service.scss";
import video from "./video.mp4";
import Navbar from "../../components/Navbar/Navbar";

const Service = () => {
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
      <div className="container_service">
        <video id="video" src={video} controls></video>
      </div>
    </div>
  );
};

export default Service;
