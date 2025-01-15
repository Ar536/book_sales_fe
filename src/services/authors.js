import API from "../api"

export const getAuthors = async () => {
  const { data } = await API.get('/authors')
  return data.data
}

export const createAuthor = async (data) => {
    try {
        const response = await API.post('/authors', data)// endpoint
        return response.data
    }   catch (err) {
        console.log(err)
        throw err
    }
}

export const updateAuthor= async (id,data) => {
    try {
        const response = await API.post(`/authors/${id}`,data) // endpoint
        return response.data
    }   catch (err) {
        console.log(err);
        throw err
    }
}

export const deleteAuthor = async (id) => {
    try {
        await API.delete(`/authors/${id}`)// endpoint
    }   catch (err) {
        console.log(err)
        throw err
    }
}
