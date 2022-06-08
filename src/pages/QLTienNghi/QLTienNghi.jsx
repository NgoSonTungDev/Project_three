import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../../components/Navbar/Navbar";
import "./QLTienNghi.scss";
import { dataQLTienNghi } from "./data";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const QLTienNghi = () => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const [data, setData] = useState(dataQLTienNghi);
  const [open, setOpen] = useState(false);
  const [story, setStory] = useState("");
  const [mesege, setMesege] = useState("");
  var box = document.querySelector(".qltiennghi-modal");
  var update = document.querySelector(".btn-update");

  const clickbox = () => {
    box.style.display = "block";
  };

  React.useEffect(() => {
    setData(dataQLTienNghi);
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
    const newArr = dataQLTienNghi.filter(item =>
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
      <div className="qltiennghi-container">
        <div className="qltiennghi-header">
          <h3 className="qltiennghi-title">Quản Lý Tiện Nghi</h3>
          <div className="qltiennghi-search">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            //   onChange={e => {
            //     handleSetSearch(e.target.value);
            //   }}
              type="text"
              className="qltiennghi-input"
              placeholder="Nhập mã tiện nghi cần tìm kiếm ......"
            />
            <i
              class="fa-solid fa-magnifying-glass qltiennghi-icon"
              onClick={handleSetSearch}
            ></i>
          </div>
        </div>

        <div className="qltiennghi-table">
          <table>
            <tr>
              <th>Mã tiện nghi</th>
              <th>Loại tiện nghi</th>
              <th>Tình trạng</th>
              <th>Ngày sử dụng</th>
              <th>Ngày bảo hành</th>
              <th className="chucnang">Chức năng</th>
            </tr>
            {data.map(item => (
              <tr>
                <td>{item.matn}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{item.dateuse}</td>
                <td>{item.warrantydate}</td>
                <td className="function-table-qltiennghi">
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

        <div className="qltiennghi-modal">
          <div className="qltiennghi-modal-child">
            <div className="qltiennghi-child-close" onClick={handleClose}>
              <i class="fa-solid fa-xmark "></i>
            </div>
            <div className="qltiennghi-content-title">
              <h2>Thông tin tiện nghi</h2>
            </div>

            <div className="qltiennghi-content">
              <div className="qltiennghi-content-img">
                <img src={selectedItem.image} alt="" />
              </div>

              <div className="qltiennghi-content-information">
                <div className="qltiennghi-content-detail">
                  <p>Mã tiện nghi : {selectedItem.matn}</p>
                  <p>Loại tiện nghi : {selectedItem.name}</p>
                  <p>Tình trạng: {selectedItem.status}</p>
                  <p>Ngày sử dụng : {selectedItem.dateuse}</p>
                  <p>Ngày bảo hành : {selectedItem.warrantydate}</p>
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

export default QLTienNghi;
