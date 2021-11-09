import { createSlice } from '@reduxjs/toolkit'
import recordsThunks from '../thunks/recordsThunks'

const initialState = {
  records: [],
  name: '',
  message: '',
  isLoading: false,
  isMessageUploading: false,
  error: null
}

const { createRecord, getRecords } = recordsThunks

const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    changeName: (state, { payload }) => {
      state.name = payload
    },
    changeMessage: (state, { payload }) => {
      state.message = payload
    }
  },
  extraReducers: {
    [getRecords.fulfilled](state, { payload }) {
      state.records = payload
      state.isLoading = false
    },
    [getRecords.pending](state) {
      state.error = null
      state.isLoading = true
    },
    [getRecords.rejected](state, { payload }) {
      state.error = payload
      state.isLoading = false
    },
    [createRecord.fulfilled](state, { payload }) {
      state.records = [
        payload,
        ...state.records
      ]
      state.isMessageUploading = false
    },
    [createRecord.pending](state) {
      state.error = null
      state.isMessageUploading = true
    },
    [createRecord.rejected](state, { payload }) {
      state.error = payload
      state.isMessageUploading = false
    }
  }
})

export const reducer = recordsSlice.reducer
export const actions = recordsSlice.actions
