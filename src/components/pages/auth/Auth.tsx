import { Button, ButtonGroup, Grid, TextField } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'
import { IAuthUserData } from '../../../types'

interface Props {}

const Auth = (props: Props) => {
  const [user, setUser] = useState<IAuthUserData>({
    email: '',
    password: '',
  })
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(user.email, user.password)
    setUser({
      email: '',
      password:''
    })
  }
  return (
    <Grid display='flex' alignItems='center' justifyContent='center'>
    <form name='authForm' onSubmit={onSubmit} style={{width: '50%'}}>
      <TextField
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        id="outlined-basic"
        type={'email'}
        value={user.email}
        label="email"
        variant="outlined"
        sx={{display: 'block', marginBottom: '30px'}}
      />
      <TextField
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        id="outlined-basic"
        type={'password'}
        value={user.password}
        label="password"
        variant="outlined"
        sx={{display: 'block', marginBottom: '30px'}}
      />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button type='submit' >auth</Button>
        <Button type='submit' >register</Button>
      </ButtonGroup>
    </form>
    </Grid>
  )
}

export default Auth
