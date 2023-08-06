import React, { Component } from "react";
import { connect } from "react-redux";

import {
  hoanThienSVCreator,
  themSVCreator,
} from "../redux/formSV/formSV.action";
class TTSinhVien extends Component {
  state = {
    value: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
    error: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
  };

  handleChange = (e) => {
    let giaTri = e.target;
    let { name, value } = giaTri;
    // console.log(name, value);
    let errMess = "";

    switch (name) {
      case "email":
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value === "") {
          errMess = "Email không được bỏ trống!";
        } else if (!regexEmail.test(value)) {
          errMess = "Email không đúng định dạng";
        }
        break;
      case "maSV":
        if (value === "") {
          errMess = "Mã không được bỏ trống!";
        }

        if (
          this.props.mangSinhVien.some((sv) => {
            return sv.maSV == value;
          })
        ) {
          errMess = "Mã đã tồn tại!";
        }
        break;
      case "hoTen":
        const regexTen =
          /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value === "") {
          errMess = "Tên không được bỏ trống!";
        } else if (!regexTen.test(value)) {
          errMess = "Tên không đúng định dạng";
        }
        break;
      case "soDT":
        if (value === "") {
          errMess = "Số điện thoại không được bỏ trống!";
        }
        break;
      default:
        break;
    }

    let values = { ...this.state.value, [name]: value };
    let errors = { ...this.state.error, [name]: errMess };

    this.setState({
      value: values,
      error: errors,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.themSV(this.state.value);
  // };
  renderButton = () => {
    let showBtn = true;
    for (let key in this.state.value) {
      if (this.state.value[key].length === 0 || this.state.error[key] !== "") {
        showBtn = false;
      }
    }
    // const creator = this.props.svChinhSua ? hoanThienSVCreator : themSVCreator;
    // console.log(this.props)
    if (showBtn)
      return this.props.svChinhSua ? (
        <button
          type="button"
          onClick={() => {
            this.props.dispatch(hoanThienSVCreator(this.state.value));
          }}
          className="btn btn-success"
        >
          Chỉnh sửa
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            this.props.dispatch(themSVCreator(this.state.value));
          }}
          className="btn btn-success"
        >
          Thêm sinh viên
        </button>
      );
    else
      return (
        <button disabled className="btn btn-success">
          Thêm sinh viên
        </button>
      );
  };

  static getDerivedStateFromProps(newProps, currentState) {
    // console.log({ newProps, currentState });

    if (newProps.svChinhSua) {
      if (newProps.svChinhSua.maSV !== currentState.value.maSV) {
        return {
          ...currentState,
          value: newProps.svChinhSua,
        };
      }
    }
    return null;
  }

  render() {
    return (
      <div className="container">
        <div className="text-start">
          <div className="card-header bg-dark text-white py-2 ps-2 my-3">
            <h4>Thông tin sinh viên</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="row my-3">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    type="number"
                    className="form-control"
                    name="maSV"
                    value={this.state.value.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.error.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.value.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.error.hoTen}</p>
                </div>
              </div>
              <div className="row my-3">
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    type="number"
                    className="form-control"
                    name="soDT"
                    value={this.state.value.soDT}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.error.soDT}</p>
                </div>
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.value.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.error.email}</p>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12">{this.renderButton()}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    svChinhSua: rootReducer.QuanLySinhVienReducer.svChinhSua,
    mangSinhVien: rootReducer.QuanLySinhVienReducer.mangSinhVien,
  };
};

export default connect(mapStateToProps, null)(TTSinhVien);
