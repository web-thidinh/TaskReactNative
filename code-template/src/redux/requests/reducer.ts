import { createDriver } from '@redux-requests/axios'
import { handleRequests } from '@redux-requests/core'
import { AxiosError } from 'axios'
import axios from '../axios'
import { FETCH_USER } from './modules/user'
import {
  FETCH_BRAND_PRODUCTS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAIL,
  FETCH_SIMILAR_PRODUCTS,
} from './modules/product'
import { FETCH_BRAND, FETCH_COLOR, FETCH_SIZE } from './modules/filter'

import { Products, ProductDetail, User, Brand, Color, Size } from './types'

export type RequestsStateQueries = {
  [FETCH_USER]: RequestQuery<User>
  [FETCH_PRODUCTS]: RequestQuery<Products>
  [FETCH_SIMILAR_PRODUCTS]: RequestQuery<Products>
  [FETCH_BRAND_PRODUCTS]: RequestQuery<Products>

  [FETCH_PRODUCT_DETAIL]: RequestQuery<ProductDetail>

  [FETCH_BRAND]: RequestQuery<Brand>
  [FETCH_COLOR]: RequestQuery<Color>
  [FETCH_SIZE]: RequestQuery<Size>
}

export type RequestQuery<T> = {
  data: T
  loading: boolean
  error: AxiosError
  pristine: boolean
}

export type RequestsState = {
  queries: RequestsStateQueries
  mutations: {}
  cache: {}
  requestsKeys: {}
  normalizedData: {}
}

export const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(axios),
})
