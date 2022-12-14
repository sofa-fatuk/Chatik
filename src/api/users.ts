import {
  USERS_API
} from './constants'
import store from '../store';
import { 
  concatUsers,
  setUsers,
  getInfoUser,
} from '../store/actions';

type GetContactsResult = {
  hasMore: boolean,
}

export const getUsers = async (search: string, page: number, reset = false): Promise<GetContactsResult> => {
  try {
    const url = `${USERS_API}?name_like=${search}&_page=${page}&_limit=20`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': ' application/json',
      },
    });
    const users = await response.json();
    // console.log('response', response);

    if (reset) {
      store.dispatch(setUsers(users))
    } else {
      store.dispatch(concatUsers(users))
    }

    return {
      hasMore: users.length > 0,
    }
  } catch (error) {
    console.error(error);
    return {
      hasMore: false,
    }
  }
}

export const getIdUser = async (id: string) => {
  try {
    const response = await fetch(`${USERS_API}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log('INFO', response);

    store.dispatch(getInfoUser(id))

  } catch (error) {
    console.error(error);
    return []
  } 
}
