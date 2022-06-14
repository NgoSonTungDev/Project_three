import React from "react";
import "./QLPhong.scss";
import Navbar from "../../components/Navbar/Navbar";
import TableQLphong from "../../components/TableQLPhong/TableQLphong";

const QLPhong = () => {
  return (
    <div>
      <Navbar />
      <div className="container_QuanLyPhong">
        <div className="qlphong-header">
          <h3 className="qlphong-title">Quản Lý Phòng</h3>
          <div className="qlphong-search">
            <input
              type="text"
              className="qlphong-input"
              placeholder="Nhập Phòng cần tìm kiếm ......"
            />
            <i class="fa-solid fa-magnifying-glass qlphong-icon"></i>
          </div>
        </div>
        <div className="container_tableQLphong">
          <TableQLphong />
        </div>
      </div>
    </div>
  );
};

export default QLPhong;
