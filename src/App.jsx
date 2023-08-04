import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Screen from './dat-ve-xem-phim/screen'
import DanhSachGhe from './dat-ve-xem-phim/ds-ghe'

function App() {

  return (
    <>    
      <div className="d-flex justify-content-between">
        <Screen />
        <DanhSachGhe />
      </div>
    </>
  )
}

export default App
