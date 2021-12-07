import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { QuestionAnswer } from '@mui/icons-material'
import { ListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
interface Props {}

const MenuElement = (props: Props) => {
  const navigate = useNavigate()
  return (
    <ListItem onClick = {()=>navigate('/massages')} sx={{backgroundColor: 'lightgrey', marginRight: 0}} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <QuestionAnswer />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>
    </ListItem>
  )
}

export default MenuElement
