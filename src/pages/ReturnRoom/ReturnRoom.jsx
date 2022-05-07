import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../../asset/data";
import "./ReturnRoom.scss";

const ReturnRoom = () => {
  const location = useLocation();
  const maphong = location.pathname.split("/home/returnroom/")[1];
  const dataRoom = data.find((e) => e.maphong === maphong);
  return (
    <div>
      <div className="container_returnroom">
        <div className="form_return_room">
          <div className="tieude">
            <div className="tieude_1"></div>
            <div className="tieude_2">
              <div className="tieude_2_1"></div>
              <div className="tieude_2_2">
                <p>TRẢ PHÒNG</p>
              </div>
              <div className="tieude_2_3"></div>
            </div>
          </div>
          <div className="form_return_room_content">
            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1"></div>
              <div className="form_return_room_content_1_1"></div>
            </div>
          </div>
        </div>
        <div className="form_return_room2">
          <div className="tieude">
            <div className="tieude_1"></div>
            <div className="tieude_2">
              <div className="tieude_2_1"></div>
              <div className="tieude_2_2">
                <p>HÓA ĐƠN</p>
              </div>
              <div className="tieude_2_3"></div>
            </div>
          </div>
          <div className="form_return_room_content"></div>
        </div>
      </div>
    </div>
  );
};

export default ReturnRoom;
