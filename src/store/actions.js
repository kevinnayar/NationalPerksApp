import parks from '../data/parks.json'
import { getResource } from '../util/npsApi'
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

export const FETCH_NPS_PARK_DATA = 'FETCH_NPS_PARK_DATA'

export function fetchNpsParkData(parkCode) {
  return (dispatch) => {
    getResource('parks', {
      parkCode,
      limit: 0,
    })
    .then(response => {
      if (response && response.data.length) {
        return dispatch({
          type: FETCH_NPS_PARK_DATA,
          payload: response.data,
        })
      }
      else {
        return dispatch({
          type: FETCH_NPS_PARK_DATA,
          payload: {},
        })
      }
    })
  }
}

export const FETCH_NPS_PARK_ARTICLES = 'FETCH_NPS_PARK_ARTICLES'

export function fetchNpsParkArticles(parkCode) {
  return (dispatch) => {
    getResource('articles', {
      parkCode,
      limit: 3,
    })
    .then(response => {
      if (response && response.data.length) {
        return dispatch({
          type: FETCH_NPS_PARK_ARTICLES,
          payload: response.data,
        })
      }
      else {
        return dispatch({
          type: FETCH_NPS_PARK_ARTICLES,
          payload: [],
        })
      }
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

/*
newsreleases
*/

export const SAVE_OR_UNSAVE_PARK = 'SAVE_OR_UNSAVE_PARK'

export function saveOrUnsavePark(id) {
  return (dispatch) => {
    return dispatch({
      type: SAVE_OR_UNSAVE_PARK,
      payload: id,
    })
  }
}
