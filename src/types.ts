import { Dispatch, SetStateAction } from "react";

export type TypeSetState <T> = Dispatch<SetStateAction<T>>

export interface IUser {
  userId: number
  user: string
  src: string
  isActive: boolean
}
export interface IRoute {
  path: string
  exact: boolean
  component: React.FC
  auth: boolean
}
export interface IPost {
  author: IUser
  createdAt: string
  content: string
  images?: Array<string>
}
export interface IMenuItem {
  title: string
  link: string
  icon: React.FC
  marginBottom?: string
}
export interface IAuthUserData{
  email: string
  password: string
}