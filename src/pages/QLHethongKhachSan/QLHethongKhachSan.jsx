import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TableDatPhong from "../../components/TableDatPhong/TableDatPhong";
import TableTraPhong from "../../components/TableTraPhong/TableTraPhong";
import "./QLHethongkhachSan.scss";

const QLHethongKhachSan = () => {
  var table1 = document.querySelector(".container_QLKhachSan_table_datphong");
  var table2 = document.querySelector(".container_QLKhachSan_table_traphong");
  // var container_QLKhachSan = document.querySelector(".container_QLKhachSan");

  const handledatphong = () => {
    table1.style.display = "block";
    table2.style.display = "none";
    // container_QLKhachSan.style.backgroundImage = "url('https://menback.com/wp-content/uploads/2021/02/cac-kieu-con-gai-tren-mang-559x375.jpg')";
  };

  const handletraphong = () => {
    table1.style.display = "none";
    table2.style.display = "block";
  };

  return (
    <div>
      <Navbar />
      <div className="container_QLKhachSan">
        <div className="quanlyhethong_title">
          <h3>Quản Lý Hệ Thống</h3>
          <div className="quanlyhethong_search">
            <input
              type="text"
              className="quanlyhethong_input"
              placeholder="Nhập tên Phòng cần tìm kiếm ......"
            />
            <i class="fa-solid fa-magnifying-glass quanlyhethong_icon"></i>
          </div>
        </div>
        <div className="QuanLyPhong">
          <div className="QuanLydatphong">
            <button class="button_3d" onClick={handledatphong}>
              Danh Sách Đặt Phòng
            </button>
          </div>
          <div className="QuanLytraphong">
            <button class="button_3d" onClick={handletraphong}>
              Danh Sách Trả Phòng
            </button>
          </div>
        </div>
        <div className="container_QLKhachSan_table">
          <div className="container_QLKhachSan_table_datphong">
            <TableDatPhong />
          </div>
          <div className="container_QLKhachSan_table_traphong">
            <TableTraPhong />
          </div>
        </div>
      </div>

    </div>
  );
};

export default QLHethongKhachSan;
