const recordFieldsValidator = (name, message) => {
  let errors = {}
  let isNameValid = true
  let isMessageValid = true
  const nameRegex = /^\w+$/

  if (!name) {
    errors = {
      ...errors,
      name: 'Can\'t be blank'
    }
    isNameValid = false
  }

  if (name && !nameRegex.test(name)) {
    errors = {
      ...errors,
      name: 'Only latin characters, numbers and underscore are allowed'
    }
    isNameValid = false
  }

  if (!message) {
    errors = {
      ...errors,
      message: 'Can\'t be blank'
    }
    isMessageValid = false
  }

  return {
    isValid: isNameValid && isMessageValid,
    errors
  }
}

export default recordFieldsValidator
