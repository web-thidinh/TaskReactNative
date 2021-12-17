import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './reducers'
import { requestsMiddleware } from './requests'

const middleware = compose(applyMiddleware(...requestsMiddleware), applyMiddleware(logger))

// @ts-ignore
export const store = createStore(rootReducer, composeWithDevTools(middleware))
export const persistor = persistStore(store)
