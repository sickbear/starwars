/**
 * Отправляет запрос
 * @param {String} url - url запроса
 * @returns {Promise} - Promise с результатом запроса
 */
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

export const makeConcurrentRequest = async (urls) => {
  const res = await Promise.all(urls.map(res => {
    return fetch(res).then(res => res.json())
  }))

  return res
}
