import React from "react";
import "./QlluongTable.scss";

const QlluongTable = (props) => {
  const item = props.dataTable;
  console.log(item);

  return (
    <div>
      <div className="table-qlluong">
        <table>
          <tr>
            <th>Mã nhân viên</th>
            <th>Tên nhân viên</th>
            <th>Ngày công</th>
            <th>Thành tiền</th>
            <th className="chucnang">Chức năng</th>
          </tr>
          {item.map((item) => (
            <tr>
              <td>{item.mnv}</td>
              <td>{item.name}</td>
              <td>{item.day}</td>
              <td>{item.price}</td>
              <td className="function-table-qlluong">
                <button>View</button>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default QlluongTable;
