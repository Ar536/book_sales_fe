import API from "../api"

export const getPmethods = async () => {
  const { data } = await API.get('/payment_methods')
  return data.data
}

export const createPmethod = async (data) => {
    try {
        const response = await API.post('/payment_methods', data)// endpoint
        return response.data
    }   catch (err) {
        console.log(err)
        throw err
    }
}

export const updatePmethod= async (id,data) => {
    try {
        const response = await API.post(`/payment_methods/${id}`,data) // endpoint
        return response.data
    }   catch (err) {
        console.log(err);
        throw err
    }
}

export const deletePmethod = async (id) => {
    try {
        await API.delete(`/payment_methods/${id}`)// endpoint
    }   catch (err) {
        console.log(err)
        throw err
    }
}