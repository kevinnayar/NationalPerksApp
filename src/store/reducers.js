import { setValue } from '../util/asyncStorageApi'
import {
  FETCH_PARKS,
  FETCH_NPS_PARK_DATA,
  FETCH_NPS_PARK_ARTICLES,
  FETCH_SAVED_PARKS,
  SAVE_OR_UNSAVE_PARK,
} from './actions'

const initialState = {
  parks: [],
  savedParks: [],
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

    case FETCH_NPS_PARK_DATA: {
      state = {
        ...state,
        npsParkData: action.payload[0],
      }
      return state
    }

    case FETCH_NPS_PARK_ARTICLES: {
      state = {
        ...state,
        npsParkArticles: action.payload,
      }
      return state
    }

    case FETCH_SAVED_PARKS: {
      state = {
        ...state,
        savedParks: action.payload,
      }
      return state
    }

    case SAVE_OR_UNSAVE_PARK: {
      const id = action.payload

      if (!state.savedParks.includes(id)) {
        state = {
          ...state,
          savedParks: [ ...state.savedParks, id ],
        }
      }
      else {
        state = {
          ...state,
          savedParks: state.savedParks.filter(savedPark => savedPark !== id),
        }
      }

      setValue('savedParks', state.savedParks)
      return state
    }

    default: {
      return state
    }
  }
}

export default reducer
