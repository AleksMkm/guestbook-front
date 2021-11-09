import { configureStore } from '@reduxjs/toolkit'

import { reducer as recordsReducer } from '../slices/recordsSlice'

const store = configureStore({
  reducer: {
    records: recordsReducer
  }
})

export default store
