export const getLocalStorage = key => {
  const data = localStorage.getItem(key)

  if (data !== null) {
    return JSON.parse(data)
  }

  return {}
}

export const setLocalStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}