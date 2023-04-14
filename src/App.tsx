import React from 'react'
import Layout from './Layout/Layout'
import { HashRouter } from "react-router-dom";
export default function App() {
  return (
    <>
      <HashRouter>
        <Layout />
      </HashRouter>
    </>
  )
}
