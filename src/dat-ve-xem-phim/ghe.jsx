import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datGheCreator } from '../redux/dat-ve/datve.action'

class Ghe extends Component {
    renderGhe = () => {
        // console.log(this.props)
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = ''
            let hienthi = false
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                hienthi = true
            }
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }
            return <button 
                onClick={() => {
                    this.props.dispatch(datGheCreator(ghe))
                }} disabled = {hienthi}
                className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {index + 1}
            </button>
        })
    }
    renderHangDau = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button
                className='rowNumber' key={index}>{hang.soGhe}</button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='text-start text-warning mt-2 ms-3' style={{ fontSize: 20 }}>
                <span className='sttCot'> {this.props.hangGhe.hang}</span>{this.renderHangDau()}
            </div>
        }
        else {
            return <div className='text-start text-warning mt-2 ms-3' style={{ fontSize: 20 }}>
                <span className='sttCot'> {this.props.hangGhe.hang}</span>{this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = rootReducer => {
    return {
        danhSachGheDangDat: rootReducer.DatVeReducer.danhSachGheDangDat,
    }
}
export default connect(mapStateToProps)(Ghe);
