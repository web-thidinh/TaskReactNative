import { getQuerySelector } from '@redux-requests/core'
import { MainState } from '../redux/reducers'
import { RequestsState } from '../redux/requests'
import useConnect from './useConnect'

export type RequestOptions<T> = {
  requestKey?: string
  defaultData?: T
  id?: string
}

export function getRequestSelector<Key extends keyof RequestsState['queries']>(
  query: Key,
  options: RequestOptions<any> = {}
): (state: MainState) => RequestsState['queries'][Key] {
  return getQuerySelector({
    type: query + (options.id || ''),
    ...options,
  }) as unknown as (state: MainState) => RequestsState['queries'][Key]
}

function useConnectRequest<Key extends keyof RequestsState['queries']>(
  query: Key,
  options: RequestOptions<any> = {}
): RequestsState['queries'][Key] {
  const state = useConnect(
    // @ts-ignore
    getQuerySelector({
      type: query + (options.id || ''),
      ...options,
    })
  )

  return state
}

const persistKeyBase = 'USE_PERSISTED_CONNECT_REQUEST-'

export function bustPersistedConnectRequest(query: string) {
  localStorage.removeItem(persistKeyBase + query)
}

export function usePersistedConnectRequest<Key extends keyof RequestsState['queries']>(
  query: Key,
  options: RequestOptions<any> = {}
): RequestsState['queries'][Key] {
  const persistKey = persistKeyBase + query
  const persistedData = localStorage.getItem(persistKey)
  const parsedPersistedData = persistedData && JSON.parse(persistedData)
  const defaultData = parsedPersistedData || options.defaultData

  const state = useConnect(
    // @ts-ignore
    getQuerySelector({
      type: query + (options.id || ''),
      ...options,
      defaultData,
    })
  )

  const isEmptyArray = state.data && Array.isArray(state.data) && !state.data.length

  if (state.data && !isEmptyArray) {
    localStorage.setItem(persistKey, JSON.stringify(state.data))
  }

  return state
}

export default useConnectRequest
