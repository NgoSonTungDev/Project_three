import React from 'react';
import "./TableQLphong.scss"
import DataQLphong from './DataTableQLphong';

const TableQLphong = () => {
    return (
        <div>
           <table className="table_QLphong">
        <tr>
          <th>Mã Phòng </th>
          <th>Tên Người Book </th>
          <th>Số Điện Thoại </th>
          <th>Tình Trạng Phòng </th>
          <th>Tình Trạng Vệ Sinh Phòng</th>
          <th>Phòng Số </th>
          <th>Giá Phòng</th>
          <th>Chức Năng </th>
        </tr>
        {DataQLphong.map((item) => (
          <tr>
            <td>{item.Maphong}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.Tinhtrang}</td>
            <td>{item.TinhtrangVS}</td>
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

export default TableQLphong;