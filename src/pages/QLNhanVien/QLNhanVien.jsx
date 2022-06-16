import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../../components/Navbar/Navbar";
import "./QLNhanVien.scss";
import { dataQLNhanVien } from "./data";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const QLNhanVien = () => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const [data, setData] = useState(dataQLNhanVien);
  const [open, setOpen] = useState(false);
  const [story, setStory] = useState("");
  const [mesege, setMesege] = useState("");
  var box = document.querySelector(".qlnhanvien-modal");
  var update = document.querySelector(".btn-update");

  const clickbox = () => {
    box.style.display = "block";
  };

  React.useEffect(() => {
    setData(dataQLNhanVien);
  }, []);

  const handleClose = () => {
    box.style.display = "none";
  };

  // const handleSearch = () => {
  //   setSearch("");
  //   if (dataQLKhachHang.find(item => item.makh === search)) {
  //     box.style.display = "block";
  //     setData(dataQLKhachHang.find(item => item.makh === search));
  //   } else {
  //     setMesege("Không tìm thấy nhân viên!!!");
  //     setStory("error");
  //     handleClick();
  //   }
  // };
  //
  const handleSetSearch = () => {
    const newArr = dataQLNhanVien.filter((item) =>
      item?.manv?.toLowerCase()?.includes(search.toLowerCase())
    );
    setData(newArr);
  };
  // tìm theo tên
  // const handleSearchEmployees = () => {
  //   const newArr = dataQLKhachHang.filter(item =>
  //     item?.name?.toLowerCase()?.includes(search.toLowerCase())
  //   );
  //   setData(newArr);
  // };

  // const handleFillSearchEmployees = val => {
  //   setSearch(val);
  //   if (val === "") {
  //     setData(dataQLKhachHang);
  //   }
  // };
  //

  const handleClick = () => {
    setOpen(true);
  };

  const handleCloseDelete = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClickDelete = () => {
    handleClick();
    setMesege("Delete successfully!!!");
    setStory("success");
  };

  const handleClickUpdateClose = () => {
    update.style.display = "none";
  };

  const handleClickUpdate = () => {
    update.style.display = "block";
  };

  const hamdleCloseUpdate = () => {
    handleClick();
    setMesege("Update successfully!!!");
    setStory("success");
    handleClose();
  };

  return (
    <div>
      <Navbar />
      <div className="qlnhanvien-container">
        <div className="qlnhanvien-header">
          <h3 className="qlnhanvien-title">Quản Lý Nhân Viên</h3>
          <div className="qlnhanvien-search">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              //   onChange={e => {
              //     handleSetSearch(e.target.value);
              //   }}
              type="text"
              className="qlnhanvien-input"
              placeholder="Nhập mã nhân viên cần tìm kiếm ......"
            />
            <i
              class="fa-solid fa-magnifying-glass qlnhanvien-icon"
              onClick={handleSetSearch}
            ></i>
          </div>
        </div>

        <div className="qlnhanvien-table">
          <table>
            <tr>
              <th>Mã nhân viên</th>
              <th>Tên nhân viên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Số CMND</th>
              <th>Chức vụ</th>
              <th className="chucnang">Chức năng</th>
            </tr>
            {data.map((item) => (
              <tr>
                <td>{item.manv}</td>
                <td>{item.name}</td>
                <td>{item.birtDay}</td>
                <td>{item.email}</td>
                <td>{item.adress}</td>
                <td>{item.cmnd}</td>
                <td>{item.position}</td>
                <td className="function-table-qlnhanvien">
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      clickbox();
                      handleClickUpdateClose();
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      clickbox();
                      handleClickUpdate();
                    }}
                  >
                    Update
                  </button>
                  <button onClick={handleClickDelete}>Delete</button>
                </td>
              </tr>
              // <QlluongTable dataTable={item} />
            ))}
          </table>
          
        </div>
        <div className="qlnhanvien-modal">
            <div className="qlnhanvien-modal-child">
              <div className="qlnhanvien-child-close" onClick={handleClose}>
                <i class="fa-solid fa-xmark "></i>
              </div>
              <div className="qlnhanvien-content-title">
                <h2>Thông tin nhân viên</h2>
              </div>

              <div className="qlnhanvien-content">
                <div className="qlnhanvien-content-img">
                  <img src={selectedItem.image} alt="" />
                </div>

                <div className="qlnhanvien-content-information">
                  <div className="qlnhanvien-content-detail">
                    <p>Mã nhân viên : {selectedItem.manv}</p>
                    <p>Tên nhân viên : {selectedItem.name}</p>
                    <p>Ngày sinh : {selectedItem.birtDay}</p>
                    <p>Email : {selectedItem.email}</p>
                    <p>Địa chỉ : {selectedItem.adress}</p>
                    <p>Số chứng minh nhân dân : {selectedItem.cmnd}</p>
                    <p>Chức vụ : {selectedItem.position}</p>
                  </div>

                  <button className="btn-update" onClick={hamdleCloseUpdate}>
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>

        <Stack spacing={10} sx={{ width: "100%" }}>
          <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleCloseDelete}
          >
            <Alert
              onClose={handleCloseDelete}
              severity={story}
              sx={{ width: "100%" }}
            >
              {mesege}
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
};

export default QLNhanVien;
