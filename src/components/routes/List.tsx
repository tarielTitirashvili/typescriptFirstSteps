import { Home } from '../pages/home/Home'

export type route = {
  path: string
  exact: boolean
  component: Function
  auth: boolean
}

export const routes: Array<route> = [
  {
    path: '/profile/:id',
    exact: false,
    component: Home,
    auth: true,
  },
  {
    path: '/massages',
    exact: true,
    component: Home,
    auth: true,
  },
  {
    path: '/massage/:id',
    exact: true,
    component: Home,
    auth: true,
  },
  {
    path: '/friends/:id',
    exact: true,
    component: Home,
    auth: true,
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
    component: Home,
    auth: false
  }
]