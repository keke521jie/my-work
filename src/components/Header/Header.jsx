import React from 'react'
import './Header.scss'
import CellularConnectionPath from '../../assets/images/Cellular-Connection-path@2x (1).png'
export default function Header() {
  return (
    <div className="header">
        <div className="time">9.41</div>
        <div className="state">
            <div className="signal"><img src={CellularConnectionPath} alt="" />
            </div>
            <div className="wifi"></div>
            <div className="electric"></div>
        </div>
    </div>
  )
}
