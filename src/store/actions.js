import parks from '../data/parks.json'

export const FETCH_PARKS = 'FETCH_PARKS'
export function fetchParks() {
  return (dispatch) => {
    return dispatch({
      type: FETCH_PARKS,
      payload: parks,
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
