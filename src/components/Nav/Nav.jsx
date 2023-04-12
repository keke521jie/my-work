import React from 'react'
import './Nav.scss'
import system from './images/system@2x.png'
export default function Nav() {
  return (
    <ul id="nav">
        <li>告警</li>
        <li className='active'>直播</li>
        <li>回看</li>
        <li>
            <img src={system} alt="" />
            设置
        </li>
    </ul>
  )
}
