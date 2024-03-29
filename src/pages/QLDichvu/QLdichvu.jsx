import React from "react";
import "./QLdichvu.scss";
import Navbar from "../../components/Navbar/Navbar";
import TableQLdichvu from "../../components/TableQLdichvu/TableQLdichvu";

const QuanLyDichVu = () => {
  return (
    <div>
      <Navbar />
      <div className="container_QuanDV">
        <div className="qldichvu-header">
          <h3 className="qldichvu-title">Quản Lý Dịch Vụ</h3>
          <div className="qldichvu-search">
            <input
              type="text"
              className="qldichvu-input"
              placeholder="Nhập dịch vụ cần tìm kiếm ......"
            />
            <i class="fa-solid fa-magnifying-glass qldichvu-icon"></i>
          </div>
        </div>
        <div className="container_tableQLphong">
            <TableQLdichvu/>
        </div>
      </div>
    </div>
  );
};

export default QuanLyDichVu;
