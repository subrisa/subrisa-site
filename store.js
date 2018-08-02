import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
  checkoutId: null,
  persistLoaded: false
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHECKOUT_ID':
      return Object.assign({}, state, {
        checkoutId: action.id,
      })
    case 'persist/REHYDRATE':
      return Object.assign({}, state, {
        persistLoaded: true
      })
    default: return state
  }
}

// ACTIONS
export const setCheckoutId = (id) => dispatch => {
  return dispatch({ type: 'SET_CHECKOUT_ID', id: id })
}

export const makeStore = (initialState, {isServer, req, debug, storeKey}) => {
  if (isServer) {;
      return createStore(reducer, initialState, applyMiddleware(thunk, logger))
  } else {
      // we need it only on client side
      const {persistStore, persistReducer} = require('redux-persist');
      const storage = require('redux-persist/lib/storage').default;
      const persistConfig = {
          key: 'nextjs',
          whitelist: ['checkoutId'], // make sure it does not clash with server keys
          storage
      };
      const persistedReducer = persistReducer(persistConfig, reducer);
      const store = createStore(persistedReducer, initialState, applyMiddleware(thunk, logger))
      store.__persistor = persistStore(store); // Nasty hack
      return store;
  }
};