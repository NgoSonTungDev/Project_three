import React, { useState } from "react";
import "./Navbar.scss";
const Navbar = () => {
    const [check , setCheck] = useState(true)

    const handleuser = ()=>{
        var box = document.querySelector(".container_narbar_content_2")
        if(check === true){
            box.style.display="block";
            setCheck(false)
        }else{
            box.style.display="none";
            setCheck(true)
        }
    }

  return (
    <div>
      <div className="container_narbar">
        <div className="container_narbar_logo">
          <img
            src="https://st2.depositphotos.com/5486388/8161/v/950/depositphotos_81616810-stock-illustration-hotel-logo-template.jpg"
            alt=""
          /> 
          <p>khách sạn tiger</p>
        </div>
        <div className="container_narbar_content">
          <div className="container_narbar_content_1">
              <ul>
                  <li>Trang Chủ</li>
                  <li>Quản lý</li>
                  <li>Sự kiện</li>
                  <li>Báo cáo/thống kê</li>
              </ul>

          </div>
          <div className="container_narbar_content_name">
              <p>Nguyen van A</p>
          </div>
          <div className="container_narbar_content_user" onClick={handleuser}>
            <div className="container_narbar_content_2">
              <div className="arrow-up"></div>
              <div className="container_narbar_content_2_1">
              <i class='bx bx-message-dots'></i>
              <p> đóng góp & ý kiến</p>
              </div>
              <div className="container_narbar_content_2_1">
              <i class="fa-solid fa-user-lock"></i>
              <p> quyền riêng tư</p>
              </div>
              <div className="container_narbar_content_2_1">
              <i class='bx bx-question-mark'></i>
              <p> trợ giúp</p>
              </div>
              <div className="container_narbar_content_2_1">
              <i class="fa-solid fa-gear"></i>
              <p> cài đặt</p>
              </div>
              <div className="container_narbar_content_2_1">
              <i class='bx bx-log-out'></i>
              <p> đăng xuất</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
