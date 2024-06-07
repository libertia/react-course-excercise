import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import counter from './counter'
import ex7Slice from './excercise7';

const reducer = combineReducers({
  counter,
  ex7Slice
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