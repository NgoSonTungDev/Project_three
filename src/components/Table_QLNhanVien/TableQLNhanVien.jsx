import React from "react";
import "./TableQLNhanVien.scss";
const TableQLNhanVien = props => {
  const item = props.DTTBQLNV;
  return (
    <div>
      {/* <div className="ContainerTableQLNv">
        <table>
          <tr>
            <th>Mã Nhân Viên</th>
            <th>Tên Nhân Viên</th>
            <th>Ngày Sinh</th>
            <th>Email</th>
            <th>Địa Chỉ</th>
            <th>CMND</th>
            <th>Chức Vụ</th>
            <th>chức năng</th>
          </tr>
          {item.map(data => (
            <tr>
              <td>{data.manv}</td>
              <td>{data.name}</td>
              <td>{data.birtDay}</td>
              <td>{data.email}</td>
              <td>{data.adress}</td>
              <td>{data.cmnd}</td>
              <td>{data.position}</td>
              <td className="button-table-qlnv">
                <button>View</button>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div> */}
    </div>
  );
};

export default TableQLNhanVien;
