
export const validateInput = (text, setter) => {

  const regex = /^\d*\.?\d{0,2}$/
  if (regex.test(text) || text === "") {
    setter(text)
  }
}

