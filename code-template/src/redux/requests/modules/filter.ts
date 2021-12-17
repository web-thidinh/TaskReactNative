import { RequestAction } from '@redux-requests/core'

export const FETCH_BRAND = 'FETCH_BRAND'
export const FETCH_COLOR = 'FETCH_COLOR'
export const FETCH_SIZE = 'FETCH_SIZE'

const fetchBrands = (): RequestAction => {
  return {
    type: FETCH_BRAND,
    request: {
      url: '/brands',
      method: 'GET',
    },
  }
}

const fetchColors = (): RequestAction => {
  return {
    type: FETCH_COLOR,
    request: {
      url: '/colors?populate=image&sort[0]=sort',
      method: 'GET',
    },
  }
}

const fetchSizes = (): RequestAction => {
  return {
    type: FETCH_SIZE,
    request: {
      url: '/macro-sizes?sort[0]=sort',
      method: 'GET',
    },
  }
}

export const filterActions = {
  fetchBrands,
  fetchColors,
  fetchSizes,
}
