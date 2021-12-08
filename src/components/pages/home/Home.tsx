import { Box } from '@mui/system'
import React, { FC } from 'react'
import AddPost from './HomeComponents/AddPost'

interface Props {}

export const Home: FC = (props: Props) => {
  return (
    <Box sx= {{
      border: '1px solid #ccc',
      width: '90%',
      borderRadius: 10,
      padding: '10px 10px'
    }}>
      <AddPost/>
    </Box>
  )
}
