import React from 'react';
import "./TableQLdichvu.scss";
import DataQLdichvu from './DataQLdichvu';

const TableQLdichvu = () => {
    return (
        <div>
             <table className="table_QLdichvu">
        <tr>
          <th>Mã Phòng Đặt </th>
          <th>Tên Khách Hàng </th>
          <th>Thức ăn </th>
          <th>Nước uống </th>
          <th>Số lượng</th>
          <th>Phòng Số </th>
          <th>Tổng Tiền</th>
          <th>Chức Năng </th>
        </tr>
        {DataQLdichvu.map((item) => (
          <tr>
            <td>{item.Maphong}</td>
            <td>{item.name}</td>
            <td>{item.thucan}</td>
            <td>{item.thucuong}</td>
            <td>{item.soluong}</td>
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

export default TableQLdichvu;