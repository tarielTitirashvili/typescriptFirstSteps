import { IRoute } from '../../types'
import Auth from '../pages/auth/Auth';
import Friends from '../pages/friends/Friends';
import { Home } from '../pages/home/Home'
import Massages from '../pages/massages/Massages'
import Profile from '../pages/profile/Profile';
import News from './../pages/news/News';
import Conversation from './../pages/massages/massage';


export const routes: Array<IRoute> = [
  {
    path: '/profile/:id',
    exact: false,
    component: Profile,
    auth: true,
  },
  {
    path: '/massages',
    exact: true,
    component: Massages,
    auth: true,
  },
  {
    path: '/massage/:id',
    exact: true,
    component: Conversation,
    auth: true,
  },
  {
    path: '/friends/:id',
    exact: true,
    component: Friends,
    auth: true,
  },
  {
    path: '/news',
    exact: true,
    component: News,
    auth: false,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
    auth: false,
  },
  {
    path: '/friends',
    exact: true,
    component: Friends,
    auth: false,
  },
  {
    path: '/',
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: '/auth',
    exact: true,
    component: Auth,
    auth: false
  }
]
