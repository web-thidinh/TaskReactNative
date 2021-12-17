import * as T from './types'

export type PASCAL_PLACEHOLDERState = {}

const INITIAL_STATE: PASCAL_PLACEHOLDERState = {}

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case T.CLEAR_UPPER_PLACEHOLDER_STATE:
      return INITIAL_STATE
    default:
      return state
  }
}

export default reducer
