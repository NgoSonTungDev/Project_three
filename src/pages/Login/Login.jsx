import React, { useEffect, useState } from "react";
import "./Login.scss";
import image from "./image.png";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const history = useHistory();
  const location = useLocation()

  useEffect(() => {
    const labels = document.querySelectorAll(".form-control label");

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  const handleMove = () => {
    let url = window.location.origin;
    window.location.href = `${url}/registerUser`;
    history.push("/registerUser");
  };
  const handleClickMove = () => {
    history.push("/home");

  };
  return (
    <div>
      <div className="container_login">
        <div className="container_login_form">
          <div className="container_login_form_1">
            <h3>ĐĂNG NHẬP</h3>
            <form>
              <div class="form-control">
                <input type="text" required />
                <label>Mã&nbsp;Nhân&nbsp;Viên</label>
              </div>
              <div class="form-control">
                <input type="password" required />
                <label>Mật&nbsp;Khẩu</label>
              </div>
              <p className="forgot">Quên Mật Khẩu</p>
              <button class="btn_Login" onClick={handleClickMove}>
                Login
              </button>
              <p class="text">
                Don't have an account?{" "}
                <span onClick={handleMove}>Register</span>
              </p>
            </form>
          </div>
          <div className="container_login_form_2">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
