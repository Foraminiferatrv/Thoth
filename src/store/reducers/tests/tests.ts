import { combineReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firebase from '../../../firebase/firebase'
import { CompleteTest, Test, Tests } from "../../../types/types"
import { testEditorReducer } from "./testEditor/testEditor"


const fetchTests = createAsyncThunk(
  "fetchTests",
  async () => {
    return await firebase.database()
      .ref('testsData')
      .once('value')
      .then(snapshot => snapshot.val())
  }
)

const postTest = createAsyncThunk(
  "postTest",
  async ({ testData, testId }: { testData: CompleteTest, testId: string }) => {
    return await firebase.database()
      .ref(`testsData/${testId}`).set(testData)
      .catch(error => console.log('SERVER ERROR ' + error))
  }
)


const tests = createSlice({
  name: "tests",
  initialState: {} as Tests,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTests.fulfilled, (_1, action) => {
        return action.payload
      })
      .addCase(fetchTests.rejected, (_1, action) => {
        // throw new Error(action)
        console.log(action)
      })
      .addCase(postTest.fulfilled, () => {
        
      })
  }
})

const { actions: testsActions, reducer: testsRootReducer } = tests



const testsReducer = combineReducers({
  testsData: testsRootReducer,
  testEdiorState: testEditorReducer
})


export { testsActions }
export { testsReducer }
export { fetchTests, postTest }