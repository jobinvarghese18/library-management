import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

function Register(props){
    return(
        <div>
            <Formik 
            initialValues={{
                username:'',
                email:'',
                password:'',
                address:'',
                city:'',
                state:'',
                zip:''
            }}
            onSubmit = { (values) =>{
                console.log(values)
            }}
            >
                <Form>
                    <label htmlFor='username' className='label'>username</label>
                    <Field type='text' name='username' className='form-control'/>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='text' name='email' className='form-control'/>
                    <label  htmlFor='address'>Address</label>
                    <Field type='text' name='address' className='form-control'/>
                    <label htmlFor='city'>City</label>
                    <Field type='text' name='city' className='form-control'/>
                    <label htmlFor='state'>State</label>
                    <Field type='text' name='state' className='form-control'/>
                    <label htmlFor='zip'>Zip</label>
                    <Field type='text' name='zip' className='form-control'/>
                    <button type='submit' className='btn btn-secondary'>Submit</button>

                </Form>
            </Formik>
        </div>
    )
}
export default Register