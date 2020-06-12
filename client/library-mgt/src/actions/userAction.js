import axios from '../config/axios'

//------------- User Register ----------
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

//------------- User Register -----------
export const startRegister = (formData)=>{
    return (dispatch)=>{
        axios.post('/user/register',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errmsg')){
                alert(response.data.errmsg)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}