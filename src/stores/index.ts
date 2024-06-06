import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import counter from './counter'

const reducer = combineReducers({
  counter
});

export const store = configureStore({
  reducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store;