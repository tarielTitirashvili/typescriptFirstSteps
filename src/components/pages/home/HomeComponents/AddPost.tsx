import { TextField } from '@mui/material'
import React from 'react'

interface Props {
  
}

const AddPost = (props: Props) => {
  return (
    <>
      <TextField fullWidth label="New Post" 
      id="fullWidth" 
      size = 'small' 
      InputProps={{
        sx: {
          borderRadius: '20px',
          backgroundColor: '#F9F9F9'
        }
      }}
      />
    </>
  )
}

export default AddPost
