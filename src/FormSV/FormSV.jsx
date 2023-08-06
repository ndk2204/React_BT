import React, { Component } from 'react'
import TTSinhVien from './TTSinhVien'
import TableSV from './TableSV'

export default class FormSV extends Component {
  render() {
    return (
      <div>
        <TTSinhVien/>
        <TableSV/>
      </div>
    )
  }
}
