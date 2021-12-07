import { Button, Grid } from '@mui/material'
import React, { FC } from 'react'
import Sidebar from '../../layout/sidebar/Sidebar'

interface Props {}

export const Home: FC = (props: Props) => {
  return (
    <div>
      <Grid container spacing={2} marginX={1} marginTop={1} marginY={3}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          fasdasf
        </Grid>
      </Grid>
    </div>
  )
}
