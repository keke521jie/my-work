import React from 'react'
import style from './Nav.module.scss'
import { NavLink } from "react-router-dom";
import system from '../../assets/images/nav/system@2x.png'
export default function Nav() {
  return (
    <ul id={style.nav}>
      <li><NavLink to="/warn">报警</NavLink></li>
      <li><NavLink to="/">直播</NavLink></li>
      <li><NavLink to="/playback">回看</NavLink></li>
      <li className={style.system}>
        <img src={system} alt="" />
        设置
      </li>
    </ul>
  )
}
