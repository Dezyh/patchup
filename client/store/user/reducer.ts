import {ActionType} from "./types"

const initialState = {
  requesting: false,
  successful: false,
  error: '',
  token: '',
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    
    case ActionType.SIGN_IN_REQUEST:
      return {
        requesting: true,
        successful: false,
        error: '',
        token: '',
      }

    case ActionType.SIGN_IN_SUCCESS:
      return {
        requesting: false,
        successful: true,
        error: '',
        token: action.token,
      }

    case ActionType.SIGN_IN_FAILURE:
      return {
        requesting: false,
        successful: false,
        error: action.error,
        token: ''
      }

    case ActionType.SIGN_UP_REQUEST:
      return {
        requesting: true,
        successful: false,
        error: '',
        token: '',
      }

    case ActionType.SIGN_UP_SUCCESS:
      return {
        requesting: false,
        successful: true,
        error: '',
        token: '',
      }

    case ActionType.SIGN_UP_FAILURE:
      return {
        requesting: false,
        successful: false,
        error: action.error,
        token: '',
      }

    case ActionType.SIGN_OUT_REQUEST:
      return {
        requesting: false,
        successful: true,
        error: '',
        token: '',
      }

    default:
      return state
  }
}

export default reducer 