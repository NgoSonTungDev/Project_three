import React, { useEffect, useState } from "react";
import "./Statistical.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Statistical = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOnClickSubMit = () => {
    var container_Statistical_input = document.querySelector(
      ".container_Statistical_input"
    );
    if (date1 === "" || date2 === "") {
      handleClick();
    } else {
      container_Statistical_input.style.display = "none";
    }
  };

  const pathLocation = location.pathname;

  useEffect(() => {
    console.log(pathLocation);
  });
  return (
    <div>
      <Navbar />
      <div className="container_Statistical">
        <div className="container_Statistical_input">
          <div className="container_Statistical_input_content">
            <p>Bạn muốn xem báo cáo từ khoản thời gian nào</p>
            <div className="container_Statistical_input_content_1">
              <div className="container_Statistical_input_content_1_1">
                <label htmlFor=""> Từ ngày :</label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={date1}
                  onChange={(e) => {
                    setDate1(e.target.value);
                  }}
                />
              </div>
              <div className="container_Statistical_input_content_1_1">
                <label htmlFor=""> đến ngày :</label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={date2}
                  onChange={(e) => {
                    setDate2(e.target.value);
                  }}
                />
              </div>
            </div>
            <button onClick={handleOnClickSubMit}>Submit</button>
          </div>
        </div>
        <div className="container_Statistican_content">
          <div className="container_Statistican_content_text">
            <p>Audience Overview : (SINCE : "{date1}" TO DATE : "{date2}")</p>
          </div>
        </div>
      </div>
      <Stack spacing={10} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Yêu cầu nhập đầy đủ dử liệu
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default Statistical;
