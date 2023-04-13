import React from 'react'

//组件引入
import Title from '../components/Title/Title'
import Nav from '../components/Nav/Nav'
// import LiveTelecast from '../page/LiveTelecast/LiveTelecast'
import Warn from '../page/Warn/Warn'
// import PlayBack from '../page/PlayBack/PlayBack'
export default function Layout() {
  return (
    <>
      <Title />
      <Nav />
      {/* <LiveTelecast /> */}
      <Warn />
      {/* <PlayBack /> */}
    </>
  )
}
