import { User } from '../../types'
import { 
  SET_USER,
  CONCAT_USERS,
  GET_INFO_USER,
} from '../actions'

type SetUsersAction = {
  users: User[],
  type: string,
}

type ConcatUsersAction = {
  users: User[],
  type: string,
}

type GetInfoUserAction = {
  id: string,
  type: string,
}

const initialState: User[] = []

function usersReducer(state = initialState, action: SetUsersAction | ConcatUsersAction | GetInfoUserAction) {
  switch(action.type) {
    case SET_USER:
      return (action as SetUsersAction).users
    case CONCAT_USERS:
      return state.concat((action as ConcatUsersAction).users)
    case GET_INFO_USER:
      const getUserId = (action as GetInfoUserAction).id
      return state.find(item => item.id === getUserId)
    default:
      return state
  }
}

export default usersReducer