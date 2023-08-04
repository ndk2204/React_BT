import React, { Component } from 'react'
import './datveStyle.css'
import dataghe from './danhSachGhe.json'
import Ghe from './ghe'
export default class Screen extends Component {
    render() {
        // console.log(dataghe)
        return (
            <div className='manhinh'>
                <h4 className='text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h4>
                <p className='mb-0 text-light'>Màn hình</p>
                <div className="screen"></div>
                <div className="row">
                    {dataghe.map((ghe, index) => {
                        return (
                            <Ghe
                                key={index}
                                hangGhe={ghe}
                                soHangGhe={index} />
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}
