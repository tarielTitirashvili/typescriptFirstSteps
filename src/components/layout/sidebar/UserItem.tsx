import React from 'react'
import { NavLink } from 'react-router-dom'
import { borderRadius, Box } from '@mui/system'
import { Avatar } from '@mui/material'

interface Props {}

const UserItem = (props: Props) => {
  return (
    <NavLink style={{ textDecoration: 'none' }} to="#">
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
              src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=119"
              alt="profilePicture"
            />
            <span>kaxa titirashvili</span>
            <Box sx={{ position: 'relative', paddingLeft: 1.5 }}>
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
          </Box>
        </Box>
      </Box>
    </NavLink>
  )
}

export default UserItem
