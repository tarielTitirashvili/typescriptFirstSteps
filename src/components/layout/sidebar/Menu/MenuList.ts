import *as Icons from '@mui/icons-material'



 const menuList: Array<menuListElem>=[
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
export type menuListElem = {
  title: string
  link: string
  icon: React.FC
  marginBottom?: string
}
export default menuList