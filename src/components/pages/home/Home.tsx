import { Box } from '@mui/system'
import React, { FC, useState } from 'react'
import { IPost } from '../../../types'
import { users } from '../../layout/sidebar/UserItem'
import AddPost from './HomeComponents/AddPost'
import Posts from './HomeComponents/Posts'

interface Props {}

export const Home: FC = (props: Props) => {
  const[posts, setPosts] = useState<Array<IPost>>([
    {
      author:users[0],
      createdAt: '5 minutes ago',
      content: 'best nature picture ever',
      images: ['https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80']
    },
    {
      author:users[1],
      createdAt: '10 minutes ago',
      content: 'best nature pictures ever',
      images: ['https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg']
    }
  ])

  return (
    <Box sx= {{
      border: '1px solid #ccc',
      width: '90%',
      borderRadius: 10,
      padding: '10px 10px'
    }}>
      <AddPost setPosts = {setPosts}/>
      <Posts posts = {posts} />
    </Box>
  )
}
