import React, { useEffect, useState } from "react";
import "./Login.scss";
import image from "./image.png";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mesege, setMesege] = useState("");
  const [story, setStory] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
    navigate("/registerUser");
  };
  const handleClickMove = () => {
    handleClick();
    if (user === "" || pass === "") {
      setMesege("Không được bỏ trống user or password");
      setStory("info");
    } else {
      if (user === "admin" && pass === "admin") {
        navigate("/home");
      } else {
        setMesege("Sai user or password");
        setStory("error");
      }
    }
  };

  return (
    <div>
      <div className="container_login">
        <div className="container_login_form">
          <div className="container_login_form_1">
            <h3>ĐĂNG NHẬP</h3>
            <form>
              <div class="form-control">
                <input
                  type="text"
                  required
                  value={user}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
                <label>Employee&nbsp;Code</label>
              </div>
              <div class="form-control">
                <input
                  type="password"
                  required
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
                <label>Passwork</label>
              </div>
              <p
                className="forgot"
                onClick={() => {
                  navigate("/forgotPassword");
                }}
              >
                Forgot password
              </p>
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
      <Stack spacing={10} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={story} sx={{ width: "100%" }}>
            {mesege}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default Login;
