import React from 'react'

//组件引入
import Title from '../components/title/Title'
import Nav from '../components/nav/Nav'
import LiveTelecast from '../page/livetelecast/LiveTelecast'
import Warn from '../page/warn/Warn'
import PlayBack from '../page/playback/PlayBack'
import { useRoutes } from "react-router-dom";
export default function Layout() {
  const element = useRoutes([
    {
      path: '/',
      element: <LiveTelecast />
    },
    {
      path: '/warn',
      element: <Warn />
    },
    {
      path: '/playback',
      element: <PlayBack />
    }
  ])
  return (
    <>
      <Title />
      <Nav />
      {element}
    </>
  )
}
