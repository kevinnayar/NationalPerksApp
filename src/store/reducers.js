import { FETCH_PARKS } from './actions'

const initialState = {
  parks: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_PARKS: {
      state = {
        ...state,
        parks: action.payload,
      }
      return state
    }

    default: {
      return state
    }
  }
}

export default reducer
