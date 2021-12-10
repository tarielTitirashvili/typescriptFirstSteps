import { TextField } from '@mui/material'
import React, { FC, KeyboardEvent, useState } from 'react'
import { IPost, TypeSetState } from '../../../../types'
import { users } from '../../../layout/sidebar/UserItem'

interface IAddPost {
  setPosts: TypeSetState<Array<IPost>>
}

const AddPost:FC<IAddPost> = ({setPosts}) => {
  const[content, setContent] = useState<string>('')
  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>):void =>{
    if(e.key==='Enter'){
      setPosts(prev=>[
          {
            author: users[0],
            content,
            createdAt: '5 m ago'
          },
          ...prev
        ]
      )
      setContent('')
    }

  }
  return (
    <>
      <TextField fullWidth label="New Post" 
      id="fullWidth" 
      size = 'small'
      onChange = {(e)=>setContent(e.target.value)}
      value={content} 
      onKeyPress={addPostHandler}
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
