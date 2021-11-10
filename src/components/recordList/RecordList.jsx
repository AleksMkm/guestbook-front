import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Record from './Record'
import Loader from '../loader/Loader'
import recordsThunks from '../../redux/thunks/recordsThunks'
import recordsSelectors from '../../redux/selectors/recordsSelectors'

const RecordsList = () => {
  const records = useSelector(recordsSelectors.recordsSelector)
  const isLoading = useSelector(recordsSelectors.isLoadingSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(recordsThunks.getRecords())
  }
  , [])

  if (isLoading)
    return <Loader />

  return (
    <>
      <h2 className="section-title">Responses</h2>
      <div className='records-wrapper'>
        {
          records.length
            ?
            records.map(record => <Record
              record={record}
              key={record._id} />)
            :
            <div>No records</div>
        }
      </div>
    </>
  )
}

export default RecordsList
