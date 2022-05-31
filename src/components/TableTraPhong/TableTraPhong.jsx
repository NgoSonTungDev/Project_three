import React from "react";
import Datatraphong from "./Datatraphong";
import "./Traphong.scss";

const TableTraPhong = () => {
  return (
    <div>
      <table className="table_traphong">
        <tr>
          <th>Mã Phòng </th>
          <th>Tên Khách Hàng </th>
          <th>Số Điện Thoại </th>
          <th>Số CCCD </th>
          <th>Ngày Đến</th>
          <th>Ngày Rời Đi</th>
          <th>Phòng Số </th>
          <th>Số Tiền Cần thanh toán </th>
          <th>Chức Năng </th>
        </tr>
        {Datatraphong.map((item) => (
          <tr>
            <td>{item.Maphong}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.CCCD}</td>
            <td>{item.dayorder}</td>
            <td>{item.day_of_leaving}</td>
            <td>{item.nameroom}</td>
            <td>{item.thanhtoan}</td>
            <td>
                  <button>
                    <i class="fa-solid fa-pen-to-square"></i>{" "}
                    <span>Chính Sửa</span>
                  </button>
                  <button>
                    <i class="bx bxs-trash"></i> <span>Xóa</span>
                  </button>
                </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableTraPhong;
