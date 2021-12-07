import React, { FC } from 'react'
import MenuElement from './Menu/MenuElement'
import UserItem from './UserItem'

interface Props {}

const Sidebar: FC = (props: Props) => {
  return (
    <div>
     <UserItem />
     <UserItem />
     <UserItem />
     <MenuElement />
    </div>
  )
}

export default Sidebar
