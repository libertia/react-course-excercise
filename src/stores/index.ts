import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from './counter'

const reducer = combineReducers({
  counterSlice
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