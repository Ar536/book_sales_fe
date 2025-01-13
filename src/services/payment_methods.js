import API from "../api"

export const getPmethods = async () => {
  const { data } = await API.get('/payment_methods')
  return data.data
}