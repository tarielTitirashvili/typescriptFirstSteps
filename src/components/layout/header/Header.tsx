import React, { FC } from 'react'
import {Search} from '@mui/icons-material'
import css from './header.module.css'
import { NavLink } from 'react-router-dom'
interface Props {
  
}

const Header:FC = (props: Props) => {
  return (
    <header className={css.header}>
      <div className= {css.image_wrapper}>
        <NavLink to='/'>
        <img 
          className={css.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbTt1CxnQAaYdbuHgoP3NCvZt-sBKcmmD9w&usqp=CAU" 
          alt="logo" 
        />
        </NavLink>
      </div>
      <div className={css.search_wrapper}>
        <Search/>
      <input className={css.search_input} type="text" placeholder='search' />
      </div>
    </header>
  )
}

export default Header
