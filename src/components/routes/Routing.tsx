import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { route, routes } from './List'
import { Routes as Switch } from 'react-router-dom'
import Layout from '../layout/Layout'
interface Props {}

const Routing: FC = (props: Props) => {
  const isAuth = true
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route: route) => {
            if (route.auth && !isAuth) {
              return false
            }
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              ></Route>
            )
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routing
