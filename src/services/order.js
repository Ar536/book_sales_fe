import API from "../api"

export const createOrder = async (data) => {
    try {
        const response = await API.post('/orders', data, {
            headers: {
            "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })// endpoint
        return response.data
    }   catch (err) {
        console.log(err)
        throw err
    }
}