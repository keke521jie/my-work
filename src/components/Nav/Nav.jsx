import React from 'react'
import './Nav.scss'
import { NavLink } from "react-router-dom";
import system from './images/system@2x.png'
export default function Nav() {
  return (
    <ul id="nav">
      <li><NavLink to="/warn">报警</NavLink></li>
      <li><NavLink to="/">直播</NavLink></li>
      <li><NavLink to="/playback">回看</NavLink></li>
      <li className='system'>
        <img src={system} alt="" />
        设置
      </li>
    </ul>
  )
}
