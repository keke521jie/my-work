import React, { useState } from 'react'
import './LiveTelecast.scss'
// import Header from '../../components/Header/Header'
import Video from '../../components/Video/Video'
import Footer from '../../components/Footer/Footer'
// 以下是图片引入
import ly from './images/ly@2x.png'
import sxj from './images/sxj@2x.png'
import sxt from './images/sxt@2x.png'
import sz from './images/sz@2x.png'
import circleBtn from './images/circle-btn@2x.png'
import cBtn from './images/c-btn@2x.png'

//函数组件
export default function LiveTelecast() {
  const [showWho, setShowWho] = useState(1) //存放需要显示按钮的编号默认为1（左按钮）
  const showBtn = (num) => {
    console.log(num);
    setShowWho(num) //收到的是需要显示按钮的编号
  }
  return (
    <>
      {/* <Header /> */}
      <Video />
      <div className="circle_controls">
        <img className='circle-btn' src={circleBtn} alt="" />
        <img className={ showWho === 1 ? 'active left c-btn' : 'left c-btn'} onClick={()=>showBtn(1)} src={cBtn} alt="" />
        <img className={ showWho === 2 ? 'active top c-btn' : 'top c-btn'} onClick={()=>showBtn(2)} src={cBtn} alt="" />
        <img className={ showWho === 3 ? 'active right c-btn' : 'right c-btn'} onClick={()=>showBtn(3)} src={cBtn} alt="" />
        <img className={ showWho === 4 ? 'active bottom c-btn' : 'bottom c-btn'} onClick={()=>showBtn(4)} src={cBtn} alt="" />
      </div>
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


