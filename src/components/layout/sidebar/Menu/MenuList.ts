import *as Icons from '@mui/icons-material'
import { IMenuItem } from '../../../../types'



 const menuList: Array<IMenuItem>=[
  {
    title: 'massages',
    link: '/massages',
    icon: Icons.QuestionAnswer,
    marginBottom: '25px'
  },
  {
    title: 'my page',
    link: '/profile',
    icon: Icons.Home
  },
  {
    title: 'news',
    link: '/news',
    icon: Icons.Article
  },
  {
    title: 'friends',
    link: '/friends',
    icon: Icons.Person
  }
]
export default menuList