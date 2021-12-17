import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistCombineReducers, persistReducer } from 'redux-persist'
import { createFilter } from 'redux-persist-transform-filter'
import { miscReducer } from './misc'
import { MiscState } from './misc/reducer'
import { requestsReducer, RequestsState } from './requests'

const persistedQueries = []

const saveSubsetFilter = createFilter(
  'requests',
  persistedQueries.map(query => `queries.${query}`),
  [],
  'whitelist'
)

const requestReducerConfig = {
  key: 'requests',
  storage: AsyncStorage,
  whitelist: ['queries'],
  transform: saveSubsetFilter,
}

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: [],
}

export type MainState = {
  misc: MiscState
  requests: RequestsState
}

export default persistCombineReducers<MainState>(persistConfig, {
  misc: miscReducer as any,
  requests: persistReducer(requestReducerConfig, requestsReducer) as any,
})
