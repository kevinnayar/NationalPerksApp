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
