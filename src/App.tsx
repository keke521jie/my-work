import React from 'react'
import Layout from './layout/Layout'
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
