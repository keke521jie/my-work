import React  from 'react'  
import style from './LiveTelecast.module.scss'
import Video from '../../components/video/Video'
import Footer from '../../components/footer/Footer'
// 图片引入
import ly from '../../assets/images/livetelecast/ly@2x.png'
import sxj from '../../assets/images/livetelecast/sxj@2x.png'
import sxt from '../../assets/images/livetelecast/sxt@2x.png'
import sz from '../../assets/images/livetelecast/sz@2x.png'
import circleBtn from '../../assets/images/livetelecast/circle-btn@2x.png'
import cBtn from '../../assets/images/livetelecast/c-btn@2x.png'

//函数组件
export default function LiveTelecast() {
  /*点击带样式 */
  // const [showWho, setShowWho] = useState(1) //存放需要显示按钮的编号默认为1（左按钮）  
  // const showBtn = (num) => {
  //   setShowWho(num) //收到的是需要显示按钮的编号
  // }
  return (
    <>
      <Video />
      <div className={style.circleControls}>
        <img className={style.circleBtn} src={circleBtn} alt="" />
        {/* <img className={ showWho === 1 ? 'active left c-btn' : 'left c-btn'} onClick={()=>showBtn(1)} src={cBtn} alt="" />
        <img className={ showWho === 2 ? 'active top c-btn' : 'top c-btn'} onClick={()=>showBtn(2)} src={cBtn} alt="" />
        <img className={ showWho === 3 ? 'active right c-btn' : 'right c-btn'} onClick={()=>showBtn(3)} src={cBtn} alt="" />
        <img className={ showWho === 4 ? 'active bottom c-btn' : 'bottom c-btn'} onClick={()=>showBtn(4)} src={cBtn} alt="" /> */}

        <img className={`${style.left} ${style.cBtn}`} src={cBtn} alt="" />
        <img className={`${style.top} ${style.cBtn}`} src={cBtn} alt="" />
        <img className={`${style.right} ${style.cBtn}`} src={cBtn} alt="" />
        <img className={`${style.bottom} ${style.cBtn}`} src={cBtn} alt="" />
      </div>
      <ul className={style.bottomNav}>
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

