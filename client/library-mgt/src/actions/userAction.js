import axios from '../config/axios'

//------------- Login user ----------
export const startLoginUser = (formData)=>{
    return (dispatch)=>{
        axios.post('/user/login',formData)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}