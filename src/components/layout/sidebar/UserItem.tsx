import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/system'
import { Avatar } from '@mui/material'

type user = {
  userId: number
  user: string
  src: string
  isActive: boolean
}

const users: Array<user> = [
  {
    userId: 111,
    user: 'mike sunders',
    src: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=119',
    isActive: false
  },
  {
    userId: 112,
    user: 'nick smith',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vHwf_WqQW7lAjOAsNDwrzeJer1Bg863H1Q&usqp=CAU',
    isActive: true
  },
  {
    userId: 113,
    user: 'sarah smith',
    src: 'https://media.istockphoto.com/photos/profile-portrait-of-woman-picture-id1281998519?b=1&k=20&m=1281998519&s=170667a&w=0&h=Rgypae-_BtdeGlhM8YDQY2osK1PiwabIHiJ0SVsWl0Q=',
    isActive: true
  },
  {
    userId: 114,
    user: 'will robinson',
    src: 'https://cdn.mos.cms.futurecdn.net/hiAGD4iPB2QRUFsPHf5s5Z-1200-80.jpg',
    isActive: false
  }
]

interface Props {}

const UserItem = (props: Props) => {
  return (
    <>
    {
      users.map((user: user)=>{
        return(<NavLink key = {user.userId} style={{ textDecoration: 'none' }} to={'/profile/'+user.userId}>
        <Box
          sx={{
            display: 'flax',
            alignItems: 'center',
            backgroundColor: 'lightgrey',
            padding: '5px',
          }}
        >
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Avatar
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                src={user.src}
                alt="profilePicture"
              />
              <span>{user.user}</span>
              {
                user.isActive?<Box sx={{ position: 'relative', paddingLeft: 1.5 }}>
                <span
                  style={{
                    backgroundColor: 'green',
                    position: 'absolute',
                    left: 2,
                    bottom: -5,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                  }}
                ></span>
                </Box>
                :<span> </span>
              }
              
            </Box>
          </Box>
        </Box>
      </NavLink>
        )
      })
    }
    </>
  )
}

export default UserItem
