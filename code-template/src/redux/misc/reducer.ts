import * as T from './types'

export type MiscState = {}

const INITIAL_STATE: MiscState = {}

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case T.CLEAR_MISC_STATE:
      return INITIAL_STATE
    default:
      return state
  }
}

export default reducer
