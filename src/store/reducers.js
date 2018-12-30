import {
  FETCH_PARKS,
  SAVE_OR_UNSAVE_PARK,
} from './actions'

const initialState = {
  parks: [],
  savedParks: ['park_acadia', 'park_arches'],
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

    case SAVE_OR_UNSAVE_PARK: {
      const id = action.payload

      if (!state.savedParks.includes(id)) {
        state = {
          ...state,
          savedParks: [ ...state.savedParks, id ]
        }
      }
      else {
        state = {
          ...state,
          savedParks: state.savedParks.filter(savedPark => savedPark !== id)
        }
      }

      return state
    }

    default: {
      return state
    }
  }
}

export default reducer
