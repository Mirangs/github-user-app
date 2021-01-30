import { combineReducers } from '@reduxjs/toolkit'
import { userSearchSlice } from 'features/UserSearch/userSearchSlice'
import { userPageSlice } from 'features/UserPage/userPageSlice'

const rootReducer = combineReducers({
  userSearch: userSearchSlice.reducer,
  userPage: userPageSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
