import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://guestbook-am.herokuapp.com/api'

const createRecord = createAsyncThunk(
  'records/createRecord',
  async ({ name, message }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/records', { name, message })
      console.log('create record response', response)
      return response.data.record
    } catch (error) {
      console.log('create record error', error)
      return rejectWithValue(error.response.data)
    }
  }
)

const getRecords = createAsyncThunk(
  'records/getRecords',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/records')
      console.log('get records response', response)
      return response.data.records
    } catch (error) {
      console.log('get records error', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export default {
  createRecord,
  getRecords
}
