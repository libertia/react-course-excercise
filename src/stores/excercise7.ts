import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
// import type { RootState } from ''

// Define a type for the slice state
export interface CounterState {
  userList: any[],
  status: string,
  error: any
}

// Define the initial state using that type
const initialState: CounterState = {
  userList: [],
  status: 'idle',
  error: undefined
}

export const ex7Slice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: state => {
    //   state.userList += 1
    // },
    // decrement: state => {
    //   state.userList -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.userList += action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Add reducers for additional action types here, and handle loading state as needed
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = "finish";
        // Add user to the state array
        state.userList = action.payload
      })
  },
})

export const fetchUserList = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {

    const response = await fetch("https://666014725425580055b20ff8.mockapi.io/api/user");
    return await response.json();
  },
)

// Selector
export const userListSelector = {
  list: (state:RootState) => state.ex7Slice.userList
};

export default ex7Slice.reducer