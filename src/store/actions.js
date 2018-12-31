import parks from '../data/parks.json'
import { getValue } from '../util/asyncStorageApi'

export const FETCH_PARKS = 'FETCH_PARKS'

export function fetchParks() {
  return (dispatch) => {
    return dispatch({
      type: FETCH_PARKS,
      payload: parks,
    })
  }
}

export const FETCH_SAVED_PARKS = 'FETCH_SAVED_PARKS'

export function fetchSavedParks() {
  return (dispatch) => {
    getValue('savedParks')
      .then(response => {
        if (response && response.length) {
          return dispatch({
            type: FETCH_SAVED_PARKS,
            payload: JSON.parse(response),
          })
        }
        else {
          return dispatch({
            type: FETCH_SAVED_PARKS,
            payload: [],
          })
        }
    })
  }
}

export const SAVE_OR_UNSAVE_PARK = 'SAVE_OR_UNSAVE_PARK'

export function saveOrUnsavePark(id) {
  return (dispatch) => {
    return dispatch({
      type: SAVE_OR_UNSAVE_PARK,
      payload: id,
    })
  }
}
