import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firebase from '../../firebase/firebase'


const fetchTests = createAsyncThunk(
  "fetchTests",
  async () => {
    return await firebase.database()
      .ref('testsData')
      .once('value')
      .then(snapshot => snapshot.val())
  }
)

const tests = createSlice({
  name: "testsData",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTests.fulfilled, (_, action) => {
        return action.payload
      })
      .addCase(fetchTests.rejected, (_, action) => {
        // throw new Error(action)
        console.log(action)
      })
  }
})

const { actions, reducer } = tests

export { actions as testsAntions }
export { reducer as testsReducer }
export { fetchTests }