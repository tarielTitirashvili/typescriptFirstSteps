import { Grid } from '@mui/material'
import React, { FC } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

interface Props {
  
}

const Layout:FC = ({children}) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX = {4} marginTop={1} paddingY={3}>
        <Grid item xs={2.4}>
          <Sidebar />
        </Grid>
        <Grid item xs={9.6}>
        {children}
        </Grid>
      </Grid>
    </>
  )
}

export default Layout