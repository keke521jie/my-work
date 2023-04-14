import React from 'react'

//组件引入
import Title from '../components/Title/Title'
import Nav from '../components/Nav/Nav'
import LiveTelecast from '../page/LiveTelecast/LiveTelecast'
import Warn from '../page/Warn/Warn'
import PlayBack from '../page/PlayBack/PlayBack'
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
