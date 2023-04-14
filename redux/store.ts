import { configureStore, combineReducers } from '@reduxjs/toolkit';

import allReducers from './reducers';

// Combining all the reducers
const rootReducer = combineReducers({
  ...allReducers,
});

// Store Configuration
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewareOptions = { serializableCheck: false };
    return getDefaultMiddleware(middlewareOptions);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
