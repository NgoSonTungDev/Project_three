import React, { useEffect, useState } from "react";
import "./ForgotPassword.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ForgotPassword = () => {
  const [check, setCheck] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlepass = () => {
    var pass = document.getElementById("pass");
    var inputpass = document.getElementById("inputpass");
    if (check === true) {
      pass.classList.remove("fa-eye-slash");
      pass.classList.add("fa-eye");
      inputpass.type = "text";
      setCheck(false);
    } else {
      pass.classList.add("fa-eye-slash");
      pass.classList.remove("fa-eye");
      setCheck(true);
      inputpass.type = "password";
    }
  };

  return (
    <div>
      <div className="container_ForgotPassword">
        <div className="form_ForgotPassword">
          <h2>Quên mật khẩu</h2>
          <div className="form_ForgotPassword_1">
            <p>Mã số Nhân viên :</p>
            <div className="form_ForgotPassword_1_1">
              <i class="fa-solid fa-user-lock"></i>{" "}
              <input type="text" placeholder="Nhập mã nhân viên " />
            </div>
          </div>
          <div className="form_ForgotPassword_1">
            <p>Mật khẩu cũ :</p>
            <div className="form_ForgotPassword_1_1">
              <i
                id="pass"
                class="fa-solid fa-eye-slash"
                onClick={handlepass}
              ></i>
              <input id="inputpass" type="password" placeholder="Mật khẩu cũ" />
            </div>
          </div>
          <button onClick={handleOpen}>Gửi yêu cầu</button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className="anoumane">Thông báo từ bộ phận phát triển</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Chào bạn, chúng tôi đã nhận được yêu cầu của bạn. Chúng tôi sẻ sử lý yêu cầu này trong 24H. Bạn vui lòng kiểm tra email của bạn thường xuyên. Cảm ơn 😉 !
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
