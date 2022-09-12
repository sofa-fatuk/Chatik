import { User } from '../../types'

export const SET_USER = 'SET_USER'
export const CONCAT_USERS = 'CONCAT_USERS'

export function setUsers(users: User[]) {
  return {
    type: SET_USER,
    users,
  }
}

export function concatUsers(users: User[]) {
  return {
    type: CONCAT_USERS,
    users,
  }
}