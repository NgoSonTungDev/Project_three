import React from "react";
import "./QLNhanVien.scss";
import Navbar from "../../components/Navbar/Navbar";
import TableQLNhanVien from "../../components/Table_QLNhanVien/TableQLNhanVien";

const dataQLNhanVien = [
    {
      manv: "001",
      name: "Phan Tấn Phú",
      birtDay:"15/05/2001",
      email: "abc@gmail.com",
      adress:"thăng bình quảng nam",
      cmnd:12342124,
      position: "giam đốc",
      image:
        "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/274578592_3098543270411064_3551142759358568005_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vFOuXrpR_wcAX9bj1a6&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-UEtU8-_7Fwg3DUDMS4xjKP14Fvbp9syQefu_eK7CZkw&oe=628CCB81",
    },
    {
        manv: "002",
        name: "Ngô Lan Trinh",
        birtDay:"12/02/2001",
        email: "tanphu15@gmail.com",
        adress:"242/ tô hiệu",
        cmnd:3424543,
        position: "nhân viên",
        image:
          "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/274578592_3098543270411064_3551142759358568005_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vFOuXrpR_wcAX9bj1a6&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-UEtU8-_7Fwg3DUDMS4xjKP14Fvbp9syQefu_eK7CZkw&oe=628CCB81",
      },
      {
        manv: "003",
        name: "Võ Văn Nhân",
        birtDay:"01/02/1998",
        email: "abc@gmail.com",
        adress:"tam kì quảng nam",
        cmnd:4309123,
        position: "Nhân Viên Sale",
        image:
          "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/274578592_3098543270411064_3551142759358568005_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vFOuXrpR_wcAX9bj1a6&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-UEtU8-_7Fwg3DUDMS4xjKP14Fvbp9syQefu_eK7CZkw&oe=628CCB81",
      },
      {
        manv: "004",
        name: "Huỳnh Thị Hồng Mai",
        birtDay:"10/05/2001",
        email: "mai@gmail.com",
        adress:"đà nẵng",
        cmnd:3452123,
        position: "Tổng giám đốc",
        image:
          "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/274578592_3098543270411064_3551142759358568005_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vFOuXrpR_wcAX9bj1a6&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-UEtU8-_7Fwg3DUDMS4xjKP14Fvbp9syQefu_eK7CZkw&oe=628CCB81",
      },
      {
        manv: "005",
        name: "Phan Tấn Phú",
        birtDay:'12/05/2001',
        email: "abc@gmail.com",
        adress:"thăng bình quảng nam",
        cmnd:12342124,
        position: "giam đốc",
        image:
          "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/274578592_3098543270411064_3551142759358568005_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vFOuXrpR_wcAX9bj1a6&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-UEtU8-_7Fwg3DUDMS4xjKP14Fvbp9syQefu_eK7CZkw&oe=628CCB81",
      },
]

const QLNhanVien = () => {
  return (
    <div>
      <Navbar />
      <div className="formQLNV">
        <div className="formQLNV_Text">
          <h1> Quản Lý Nhân Viên</h1>
        </div>
        <div className="formQLNV_Table">
          <TableQLNhanVien DTTBQLNV={dataQLNhanVien}/>
        </div>
      </div>
    </div>
  );
};

export default QLNhanVien;
