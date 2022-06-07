import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../../components/Navbar/Navbar";
import "./QLKhachHang.scss";
import { dataQLKhachHang } from "./data";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const QLKhachHang = () => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const [data, setData] = useState(dataQLKhachHang);
  const [open, setOpen] = useState(false);
  const [story, setStory] = useState("");
  const [mesege, setMesege] = useState("");
  var box = document.querySelector(".qlkhachhang-modal");
  var update = document.querySelector(".btn-update");

  const clickbox = () => {
    box.style.display = "block";
  };

  React.useEffect(() => {
    setData(dataQLKhachHang);
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
    const newArr = dataQLKhachHang.filter(item =>
      item?.makh?.toLowerCase()?.includes(search.toLowerCase())
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
      <div className="qlkhachhang-container">
        <div className="qlkhachhang-header">
          <h3 className="qlkhachhang-title">Quản Lý Khách Hàng</h3>
          <div className="qlkhachhang-search">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            //   onChange={e => {
            //     handleSetSearch(e.target.value);
            //   }}
              type="text"
              className="qlkhachhang-input"
              placeholder="Nhập mã khách hàng cần tìm kiếm ......"
            />
            <i
              class="fa-solid fa-magnifying-glass qlkhachhang-icon"
              onClick={handleSetSearch}
            ></i>
          </div>
        </div>

        <div className="qlkhachhang-table">
          <table>
            <tr>
              <th>Mã khách hàng</th>
              <th>Tên khách hàng</th>
              <th>Năm sinh</th>
              <th>Địa chỉ</th>
              <th>Số CMND</th>
              <th>SĐT</th>
              <th className="chucnang">Chức năng</th>
            </tr>
            {data.map(item => (
              <tr>
                <td>{item.makh}</td>
                <td>{item.name}</td>
                <td>{item.birtDay}</td>
                <td>{item.adress}</td>
                <td>{item.scmnd}</td>
                <td>{item.sdt}</td>
                <td className="function-table-qlkhachhang">
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

        <div className="qlkhachhang-modal">
          <div className="qlkhachhang-modal-child">
            <div className="qlkhachhang-child-close" onClick={handleClose}>
              <i class="fa-solid fa-xmark "></i>
            </div>
            <div className="qlkhachhang-content-title">
              <h2>Thông tin khách hàng</h2>
            </div>

            <div className="qlkhachhang-content">
              <div className="qlkhachhang-content-img">
                <img src={selectedItem.image} alt="" />
              </div>

              <div className="qlkhachhang-content-information">
                <div className="qlkhachhang-content-detail">
                  <p>Mã khách hàng : {selectedItem.makh}</p>
                  <p>Tên khách hàng : {selectedItem.name}</p>
                  <p>Năm sinh : {selectedItem.birtDay}</p>
                  <p>Địa chỉ : {selectedItem.adress}</p>
                  <p>Số chứng minh nhân dân : {selectedItem.scmnd}</p>
                  <p>Số điện thoại : {selectedItem.sdt}</p>
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

export default QLKhachHang;
