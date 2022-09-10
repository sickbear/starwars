const SWAPI_ROOT = 'https://swapi.dev/api/'
const SWAPI_PEOPLE = 'people'

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.error('Could not fetch.', res.status)
      return false
    }

    return await res.json()
  } catch (error) {
    console.error('Could not fetch.', error.message)
    return false
  }
}

(async () => {
  getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
  .then(data => console.log(data))
})()