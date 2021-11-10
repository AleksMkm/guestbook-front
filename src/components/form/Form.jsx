import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions as recordsActions } from '../../redux/slices/recordsSlice'
import recordsSelectors from '../../redux/selectors/recordsSelectors'
import recordFieldsValidator from '../../utils/recordFieldsValidator'
import recordsThunks from '../../redux/thunks/recordsThunks'

const Form = () => {
  const name = useSelector(recordsSelectors.nameSelector)
  const message = useSelector(recordsSelectors.messageSelector)
  const isMessageUploading = useSelector(recordsSelectors.isMessageUploadingSelector)
  const errors = useSelector(recordsSelectors.errorsSelector)

  const dispatch = useDispatch()
  const btn = useRef()

  const onSubmit = e => {
    e.preventDefault()
    btn.current.blur()
    dispatch(recordsActions.clearErrors())

    const { isValid, errors } = recordFieldsValidator(name, message)

    if (!isValid) {
      dispatch(recordsActions.setErrors(errors))
      return
    }

    dispatch(recordsThunks.createRecord({ name, message }))
  }

  const onNameChange = (e) => {
    dispatch(recordsActions.clearNameError())
    dispatch(recordsActions.changeName(e.target.value))
  }

  const onMessageChange = (e) => {
    dispatch(recordsActions.clearMessageError())
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
          <div className='error'>{errors.name}</div>
        </label>
        <label className="field">
          <textarea
            className="field__message"
            onChange={onMessageChange}
            value={message}
            name="message"
            rows="3"
            placeholder="Please type your message" />
          <div className='error'>{errors.message}</div>
        </label>
        <button ref={btn} className={`post-comment-btn ${isMessageUploading ? 'disabled' : null}`} type="submit" disabled={isMessageUploading}>
          Send
        </button>
      </form>
    </>
  )
}

export default Form
