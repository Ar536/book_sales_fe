import API from "../api"

export const getBooks = async () => {
  const { data } = await API.get('/books')
  return data.data
}