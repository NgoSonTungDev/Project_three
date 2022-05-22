import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./QlLuong.scss";

const dataQLluong = [
  {
    mnv: 101,
    name: "Ngô Văn Hiếu",
    image:
      "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/274578592_3098543270411064_3551142759358568005_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vFOuXrpR_wcAX9bj1a6&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-UEtU8-_7Fwg3DUDMS4xjKP14Fvbp9syQefu_eK7CZkw&oe=628CCB81",
    daywork: 30,
    dayoff: 3,
    day: 27,
    price: 10000000,
  },
  {
    mnv: 102,
    name: "Ngô Sơn Tùng",
    image:
      "https://gamek.mediacdn.vn/133514250583805952/2020/5/21/photo-1-1590057409626715380949.jpg",
    daywork: 30,
    dayoff: 0,
    day: 30,
    price: 15000000,
  },
  {
    mnv: 103,
    name: "Phan Tấn Phú",
    image:
      "https://scontent.fhan5-5.fna.fbcdn.net/v/t1.6435-9/61616434_211290503165259_3789012477719609344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=4Z_pgh6gYlcAX8aOD5u&tn=zxltpEKEctcZuUTS&_nc_ht=scontent.fhan5-5.fna&oh=00_AT-V7Yd7hoMaaSLvbUufMmG-fHI_5tEOTL0v9f8an2U7oA&oe=62AD73F8",
    daywork: 30,
    dayoff: 2,
    day: 28,
    price: 13000000,
  },
  {
    mnv: 104,
    name: "Trần Phước Trung Tuấn",
    image:
      "https://scontent.fhan5-5.fna.fbcdn.net/v/t1.6435-9/133363431_2610472962576584_8190088519692190823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=w8-S-ETbDIsAX94bkBi&_nc_ht=scontent.fhan5-5.fna&oh=00_AT9SLqIUXmD9qxk1NKt1ZpNjSvsZgdqOI0gwwBA4TxJdXg&oe=62AC240B",
    daywork: 30,
    dayoff: 1,
    day: 29,
    price: 14000000,
  },
  {
    mnv: 105,
    name: "Nguyễn Lương Bảo",
    image: "https://icdn.dantri.com.vn/thumb_w/640/2019/03/04/hot-girl-viet-ru-nhau-tung-loat-anh-bikini-nong-bong-19-1551714677239.jpg",
    daywork: 30,
    dayoff: 4,
    day: 26,
    price: 10000000,
  },
  {
    mnv: 106,
    name: "Nguyễn Duy Trung",
    image:
      "https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/118457651_919706068522465_7051418695476763005_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=loW1Yn8idc4AX-0XZn2&tn=zxltpEKEctcZuUTS&_nc_ht=scontent.fdad3-4.fna&oh=00_AT9gxjSs1tC-xsHBEQ0aY_EXVM47193ntNXb_mol9LieGQ&oe=62AE4EB8",
    daywork: 30,
    dayoff: 2,
    day: 28,
    price: 13000000,
  },
  {
    mnv: 107,
    name: "Nguyễn Xuân Tiến",
    image:
      "https://thegioikinhnghiem.com/wp-content/uploads/2021/06/le-thi-khanh-huyen-5.jpg",
    daywork: 30,
    dayoff: 2,
    day: 28,
    price: 13000000,
  },
  {
    mnv: 108,
    name: "Nguyễn Thanh Hải",
    image:
      "https://ttk16.com/wp-content/uploads/2021/11/tran-huyen-chau-bikini-600x800.jpg",
    daywork: 30,
    dayoff: 2,
    day: 28,
    price: 13000000,
  },
];

const Qlluong = () => {
  const [data, setData] = useState([]);
  var box = document.querySelector(".qlluong-modal");

  const clickbox = () => {
    box.style.display = "block";
  };

  const handleClose = () => {
    box.style.display = "none";
  };

  return (
    <div>
      <Navbar />

      <div className="qlluong-container">
        <div className="qlluong-header">
          <h3 className="qlluong-title">Quản Lý Lương</h3>
          <div className="qlluong-search">
            <input
              type="text"
              className="qlluong-input"
              placeholder="Nhập tên nhân viên cần tìm kiếm ......"
            />
            <i class="fa-solid fa-magnifying-glass qlluong-icon"></i>
          </div>
        </div>

        <div className="qlluong-table">
          <table>
            <tr>
              <th>Mã nhân viên</th>
              <th>Tên nhân viên</th>
              <th>Ngày làm</th>
              <th>Ngày nghỉ</th>
              <th>Ngày công</th>
              <th>Thành tiền</th>
              <th className="chucnang">Chức năng</th>
            </tr>
            {dataQLluong.map((item) => (
              <tr>
                <td>{item.mnv}</td>
                <td>{item.name}</td>
                <td>{item.daywork}</td>
                <td>{item.dayoff}</td>
                <td>{item.day}</td>
                <td>{item.price}</td>
                <td className="function-table-qlluong">
                  <button onClick={()=>{
                    setData(item);
                    clickbox()
                  }}>View</button>
                  <button>Upitem</button>
                  <button>Delete</button>
                </td>
              </tr>
              // <QlluongTable dataTable={item} />
            ))}
          </table>
        </div>

        <div className="qlluong-modal">
          <div className="qlluong-modal-child">
            <div className="qlluong-child-close" onClick={handleClose}>
              <i class="fa-solid fa-xmark "></i>
            </div>
            <div className="qlluong-content-title">
              <h2>Thông tin nhân viên</h2>
            </div>

            <div className="qlluong-content">
              <div className="qlluong-content-img">
                <img
                  src={data.image}
                  alt=""
                />
              </div>

              <div className="qlluong-content-information">
                <div className="qlluong-content-detail">
                  <p>Mã nhân viên:</p>
                  <p>Tên nhân viên: </p>
                  <p>Ngày làm:</p>
                  <p>Ngày nghỉ:</p>
                  <p>Ngày công:</p>
                  <p>Thành tiền:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qlluong;
