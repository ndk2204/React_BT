import React, { Component } from "react";
import { connect } from "react-redux";
import { chinhSuaSVCreator, xoaSVCreator } from "../redux/formSV/formSV.action";
class TableSV extends Component {
  renderSinhVien = () => {
    const { mangSinhVien } = this.props;
    return mangSinhVien.map((sv, index) => {
      return (
        <tr className="text-start" key={index}>
          <td>{sv.maSV}</td>
          <td>{sv.hoTen}</td>
          <td>{sv.soDT}</td>
          <td>{sv.email}</td>
          <td>
            <button
              onClick={() => {
                this.props.dispatch(
                  xoaSVCreator({
                    maSV: sv.maSV,
                  })
                );
              }}
              className="btn btn-danger mx-2"
            >
              Xóa
            </button>
            <button
              onClick={() => {
                this.props.dispatch(chinhSuaSVCreator(sv));
              }}
              className="btn btn-warning"
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="table-dark text-start">
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Tùy chọn</th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangSinhVien: rootReducer.QuanLySinhVienReducer.mangSinhVien,
  };
};

export default connect(mapStateToProps, null)(TableSV);
