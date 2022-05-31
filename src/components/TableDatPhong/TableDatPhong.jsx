import React from "react";
import "./TableDatPhong.scss";
import Datadatphong from "./Datadatphong";

const TableDatPhong = () => {
  return (
    <div>
      <table className="table_datphong">
        <tr>
          <th>Mã Đặt Phòng  </th>
          <th>Tên Khách Hàng </th>
          <th>Số Điện Thoại </th>
          <th>Số CCCD </th>
          <th>Ngày Đặt</th>
          <th>Tên Phòng</th>
          <th>Số Người ở</th>
          <th>Trả Trước</th>
          <th>ghi chú</th>
          <th>Chức năng</th>


        </tr>
        {Datadatphong.map((item) => (
          <tr>
            <td>{item.Maphong}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.CCCD}</td>
            <td>{item.dayorder}</td>
            <td>{item.nameroom}</td>
            <td>{item.songuoio}</td>
            <td>{item.thanhtoan}</td>
            <td>{item.note}</td>
            <td><button>
                    <i class="fa-solid fa-pen-to-square"></i>{" "}
                    <span>Chính Sửa</span>
                  </button>
                  <button>
                    <i class="bx bxs-trash"></i> <span>Xóa</span>
                  </button></td>


          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableDatPhong;
