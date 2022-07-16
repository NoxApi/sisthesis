import React from 'react'
import gradient from '../styles/gradient.module.css'
import Header from '../components/header'
const Layout = (props: any) => {
  return (
    <div>
      <div className={`bg-black p-0 text-white `}>
          <Header />
      
        <div>{props.children}</div>
      
          </div>
    </div>
  )
}

export default Layout
