import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheCreator } from '../redux/dat-ve/datve.action'

class DanhSachGhe extends Component {
  render() {
    return (
      <div className='danhsach'>
        <h4 className='text-light'>DANH SÁCH GHẾ BẠN CHỌN</h4>
        <div className="row text-start ">
          <div className='mt-4'>
            <button className='gheDuocChon me-1'></button>
            <span className='text-light align-bottom'>Ghế đã đặt </span>
          </div>
          <div className='mt-2'>
            <button className='gheDangChon me-1'></button>
            <span className='text-light align-bottom'>Ghế đang chọn </span>
          </div>
          <div className='mt-2'>
            <button className='ghe me-1 ms-0'></button>
            <span className='text-light align-bottom'>Ghế chưa đặt </span>

          </div>
        </div>
        <div className='mt-4'>
          <table className='table table-bordered'>
            <thead >
              <tr>
                <th className='text-light'>Số ghế</th>
                <th className='text-light'>Giá</th>
                <th className='text-light'>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>Số ghế</td>
                <td>Giá</td>
                <td></td>
              </tr> */}
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia.toLocaleString()}</td>
                  <td> <button
                    onClick={() => {
                      this.props.dispatch(huyGheCreator(gheDangDat))
                    }}
                    className='btn btn-danger'> Huỷ</button> </td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className='text-info'>Tổng tiền</td>
                <td className='text-info'>
                  {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                   return tongTien += gheDangDat.gia
                  },0).toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

    )
  }
}
const mapStateToProps = rootReducer => {
  return {
    danhSachGheDangDat: rootReducer.DatVeReducer.danhSachGheDangDat,
  }
}
export default connect(mapStateToProps)(DanhSachGhe);