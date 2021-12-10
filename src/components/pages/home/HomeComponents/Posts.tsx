import { Avatar, Box, ImageList, ImageListItem } from '@mui/material'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IPost } from '../../../../types'

interface Props {}
interface IPosts {
  posts: Array<IPost>
}

const Posts: FC<IPosts> = ({ posts }) => {
  const imagesLength = (number: number | undefined): number=>{
    if(number !==undefined){
      if(number<=4){
        return number
      }else return 4
    }else return 1
  }
  return (
    <>
      {posts.map((post, index) => {
        return (
          <Box
            key={index}
            sx={{
              border: '1px solid #e2e2e2',
              borderRadius: '10px',
              padding: 2,
              marginTop: '15px'
            }}
          >
            <Box>
              <NavLink
                key={post.author.userId}
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                to={'/profile/' + post.author.userId}
              >
                <Avatar
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  src={post.author.src}
                  alt="profilePicture"
                />
                <span>{post.author.user}</span>
                <span style={{ fontSize: '10px' ,opacity: '0.6' }}>{post.createdAt}</span>
              </NavLink>
              <p>{post.content}</p>
            </Box>
            <Box>
              {
              post.images?
                <ImageList
                sx={{ width: '100%', height: 650 , overflow: 'hidden'}}
                variant="quilted"
                cols={post.images?imagesLength(post.images.length): 1}
                >
                 {post.images.map((item) => (
                      <ImageListItem key={item}>
                        <img src={item} alt="post pictures" loading="lazy" />
                      </ImageListItem>
                    ))}
                </ImageList>
                  : ''
              }
            </Box>
          </Box>
        )
      })}
    </>
  )
}

export default Posts
