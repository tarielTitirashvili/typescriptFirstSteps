import React, { FC } from 'react'
import MenuElement from './Menu/MenuElement'
import UserItem from './UserItem'

interface Props {}

const Sidebar: FC = (props: Props) => {
  return (
    <>
     <UserItem />
     <MenuElement />
    </>
  )
}

export default Sidebar
