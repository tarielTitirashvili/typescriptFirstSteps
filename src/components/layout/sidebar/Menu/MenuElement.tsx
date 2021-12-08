import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { ListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import menuList, { menuListElem } from './MenuList'
interface Props {}

const MenuElement = (props: Props) => {
  const navigate = useNavigate()
  return (
    <>
    {
      menuList.map((menuItem: menuListElem)=>{
        return(
          <ListItem 
            key = {menuItem.link} 
            onClick = {()=>navigate(`${menuItem.link}`)} 
            sx={{backgroundColor: 'lightgrey', marginRight: 0, marginBottom: `${menuItem.marginBottom}`}} 
            disablePadding
          >
            <ListItemButton >
              <ListItemIcon sx ={{
                minWidth: '36px'
              }}>
                <menuItem.icon/>
              </ListItemIcon>
              <ListItemText primary={`${menuItem.title}`} />
            </ListItemButton>
          </ListItem>
      )})
    }
    </>
  )
}

export default MenuElement
