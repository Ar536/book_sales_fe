import API from "../api"

export const getBooks = async () => {
  const { data } = await API.get('/books')// endpoint
  return data.data
}


export const createBook = async (data) => {
    try {
        const response = await API.post('/books', data)// endpoint
        return response.data
    }   catch (err) {
        console.log(err)
        throw err
    }
}

export const updateBook= async (id,data) => {
    try {
        const response = await API.post(`/books/${id}`,data) // endpoint
        return response.data
    }   catch (err) {
        console.log(err);
        throw err
    }
}

export const deleteBook = async (id) => {
    try {
        await API.delete(`/books/${id}`)// endpoint
    }   catch (err) {
        console.log(err)
        throw err
    }
}

