import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./QlLuong.scss";

const Qlluong = () => {
    return (
        <div >
            <Navbar/>

            <div className="qlluong-container">
                <div className="qlluong-header">
                    <h3 className="qlluong-title">
                        Quản Lý Lương
                    </h3>
                    <input type="text" className="qlluong-input" placeholder='Nhập tên nhân viên cần tìm kiếm ......' />
                </div>
            </div>
        </div>
    );
};

export default Qlluong;