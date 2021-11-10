import React from 'react'

const Record = ({ record }) => {
  return (
    <div className="record">
      <div className="record__author">{record.name}</div>
      <div className="record__message">{record.message}</div>
    </div>
  )

}

export default Record
