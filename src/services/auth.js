import API from "../api"

export const login = async({email, password}) => {
    try {
        const { data } = await API.post('/login', { email, password })// endpoint
        return data
    }   catch (err) {
        console.log(err)
        throw err
    }
}
export const register = async({name, email, password}) => {
    try {
        const { data } = await API.post('/register', {name, email, password })// endpoint
        return data
    }   catch (err) {
        console.log(err)
        throw err
    }
}
export const logout = async() => {
    try {
       localStorage.removeItem('accessToken')
       localStorage.removeItem('userInfo')
    }   catch (err) {
        console.log(err)
        throw err
    }
}