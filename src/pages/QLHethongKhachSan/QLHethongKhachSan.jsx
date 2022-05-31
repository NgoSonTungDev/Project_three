import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TableDatPhong from "../../components/TableDatPhong/TableDatPhong";
import TableTraPhong from "../../components/TableTraPhong/TableTraPhong";
import "./QLHethongkhachSan.scss";

const QLHethongKhachSan = () => {
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
          <div className="QuanLytraphong">
            <button class="button_3d">Danh Sách Trả Phòng</button>
          </div>
          <div className="QuanLydatphong">
            <button class="button_3d">Danh Sách Đặt Phòng</button>
          </div>
        </div>
        <div className="container_QLKhachSan_table">
        <div className="container_QLKhachSan_table_datphong">
            <TableDatPhong/>
        </div>
        {/* <div className="container_QLKhachSan_table_traphong">
          <TableTraPhong/>
        </div> */}

        </div>
      </div>
    </div>
  );
};

export default QLHethongKhachSan;
