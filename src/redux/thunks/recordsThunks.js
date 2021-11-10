import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://guestbook-am.herokuapp.com/api'

const createRecord = createAsyncThunk(
  'records/createRecord',
  async ({ name, message }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/records', { name, message })
      return response.data.data.record
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

const getRecords = createAsyncThunk(
  'records/getRecords',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/records')
      return response.data.data
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

export default {
  createRecord,
  getRecords
}
