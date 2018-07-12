const error = (message: string): never => {
  throw new Error(message)
}

// just calling the error method
// error('Super Cool Error message')

// in a callback function
const showError = () => error('super cool error message')

showError()



