import { User } from '../../types'
import { 
  SET_USER,
  CONCAT_USERS 
} from '../actions'

type SetUsersAction = {
  users: User[],
  type: string,
}

type ConcatUsersAction = {
  users: User[],
  type: string,
}

const initialState: User[] = []

function usersReducer(state = initialState, action: SetUsersAction | ConcatUsersAction) {
  switch(action.type) {
    case SET_USER:
      return (action as SetUsersAction).users
    case CONCAT_USERS:
      return state.concat((action as ConcatUsersAction).users)
    default:
      return state
  }
}

export default usersReducer