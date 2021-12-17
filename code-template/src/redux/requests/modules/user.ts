import { RequestAction } from '@redux-requests/core'
import { User } from '../types'

export const CREATE_USER = 'CREATE_USER'
export const FETCH_USER = 'FETCH_USER'
export const UPDATE_USER = 'UPDATE_USER'

const createUser = (data: Partial<any>): RequestAction => ({
  type: CREATE_USER,
  request: {
    url: '/user',
    method: 'POST',
    data,
  },
})

const fetchUser = (): RequestAction => ({
  type: FETCH_USER,
  request: {
    url: '/user',
    method: 'GET',
  },
})

const updateUser = (data: Partial<Omit<User, 'id'>>): RequestAction => ({
  type: UPDATE_USER,
  request: {
    url: '/user',
    method: 'PATCH',
    data,
  },
  meta: {
    mutations: {
      // TODO: add optimistic update
      [FETCH_USER]: (state, response) => response,
    },
  },
})

export const userActions = {
  fetchUser,
  updateUser,
  createUser,
}
