import React from 'react'
import './LiveTelecast.scss'
// import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Nav from '../../components/Nav/Nav'
import Video from '../../components/Video/Video'
import Footer from '../../components/Footer/Footer'
// 以下是图片引入
import ly from './images/ly@2x.png'
import sxj from './images/sxj@2x.png'
import sxt from './images/sxt@2x.png'
import sz from './images/sz@2x.png'

export default function LiveTelecast() {
  return (
    <>
      {/* <Header /> */}
      <Title />
      <Nav />
      <Video />
      <div className="circle_controls"></div>
      <ul className='bottom_nav'>
        <li>
          <img src={ly} alt="" />
          <span>点击通话</span>
        </li>
        <li>
          <img src={sxt} alt="" />
          <span>我的机位</span>
        </li>
        <li>
          <img src={sz} alt="" />
          <span>时光轨迹</span>
        </li>
        <li>
          <img src={sxj} alt="" />
          <span>设备巡航</span>
        </li>
      </ul>
      <Footer />
    </>
  )
}
