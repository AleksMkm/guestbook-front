import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions as recordsActions } from '../../redux/slices/recordsSlice'
import recordsSelectors from '../../redux/selectors/recordsSelectors'

// import { authOperations } from 'redux/auth'

const Form = () => {
  const name = useSelector(recordsSelectors.nameSelector)
  const message = useSelector(recordsSelectors.messageSelector)

  const dispatch = useDispatch()
  const btn = useRef()

  const onSubmit = e => {
    e.preventDefault()
    const data = { name, message }
    console.log(data)
    btn.current.blur()
  }

  const onNameChange = (e) => {
    dispatch(recordsActions.changeName(e.target.value))
  }

  const onMessageChange = (e) => {
    dispatch(recordsActions.changeMessage(e.target.value))
  }

  return (
    <>
      <h2 className="section-title">Leave your thoughts here</h2>
      <form className="new-message-form" onSubmit={onSubmit}>
        <label className="field">
          <input
            className="field__name"
            onChange={onNameChange}
            value={name}
            type="text"
            name="name"
            placeholder="Your name" />
        </label>
        <label className="field">
          <textarea
            className="field__message"
            onChange={onMessageChange}
            value={message}
            name="message"
            rows="3"
            placeholder="Please type your message" />
        </label>
        <button ref={btn} className="post-comment-btn" type="submit">
          Send
        </button>
      </form>
    </>
  )
}

export default Form
