import { createSlice } from '@reduxjs/toolkit'
import recordsThunks from '../thunks/recordsThunks'

const initialState = {
  records: [],
  name: '',
  message: '',
  isLoading: false,
  isMessageUploading: false,
  errors: {
    name: null,
    message: null
  }
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
    },
    setErrors: (state, { payload }) => {
      state.errors = payload
    },
    clearNameError: (state) => {
      state.errors.name = null
    },
    clearMessageError: (state) => {
      state.errors.message = null
    },
    clearErrors: (state) => {
      state.errors = initialState.errors
    }
  },
  extraReducers: {
    [getRecords.fulfilled](state, { payload }) {
      state.records = payload
      state.isLoading = false
    },
    [getRecords.pending](state) {
      state.errors = {}
      state.isLoading = true
    },
    [getRecords.rejected](state, { payload }) {
      state.errors = payload
      state.isLoading = false
    },
    [createRecord.fulfilled](state, { payload }) {
      state.records = [
        payload,
        ...state.records
      ]
      state.isMessageUploading = false
      state.message = ''
    },
    [createRecord.pending](state) {
      state.errors = {}
      state.isMessageUploading = true
    },
    [createRecord.rejected](state, { payload }) {
      state.errors = payload
      state.isMessageUploading = false
    }
  }
})

export const reducer = recordsSlice.reducer
export const actions = recordsSlice.actions
