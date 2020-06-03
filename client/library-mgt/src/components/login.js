import React from 'react'
import {connect} from 'react-redux'
import * as Yup from 'yup'
import { startLoginUser } from '../actions/userAction'
import {Formik,Form,Field,ErrorMessage} from 'formik'

const schema = Yup.object().shape({
    email:Yup.string().required().email('invalid email'),
    password:Yup.string().required().min(5, 'length must be grater than 4')
    .max(10, 'length must be less than 10')

})
class Login extends React.Component{
    render(){
        return(
            <div>
                <Formik initialValues = {{
                    email:'',
                    password:''
                }}
                validationSchema = {schema}
                onSubmit = {(values)=>{
                    console.log(values)
                    this.props.dispatch(startLoginUser(values))
                }} >
                    <Form>
                        <label htmlFor='email'>E-mail</label>
                        <Field type='text' name='email'/><br/>
                        <ErrorMessage
                        component='div'
                        name='email'
                        className='c-validation'/>
                        <label htmlFor='password'>password</label>
                        <Field type='text' name='password'/><br/><ErrorMessage
                        component='div'
                        name='password'
                        className='c-validation'/>
                        <button type='submit' className='myButton'>Submit</button>
                    </Form>
                </Formik>
            </div>
        )
    }
        
}
const mapStateToPros = ()=>{
    return {

    }
}
export default connect(mapStateToPros) (Login)