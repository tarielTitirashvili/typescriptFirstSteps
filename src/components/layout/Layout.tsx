import React, { FC } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

interface Props {
  
}

const Layout:FC = ({children}) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout