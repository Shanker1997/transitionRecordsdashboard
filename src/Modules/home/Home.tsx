import React, { useState } from 'react'
import * as  Yup from 'yup'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import img from '../../assets/login-page.png'
import '../styles.scss'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router';
const Home=()=>{
    const navigate=useNavigate()
    const [showPassWord,setShowPassword]=useState(false)




    const schema = Yup.object().shape({
        userName: Yup.string().required("Please Enter UserName"),
        password: Yup.string().required("Please Enter Password")
    })



    const togglePassword=()=>{
        setShowPassword(!showPassWord)
    }

    const handleSighnIn=(values:any)=>{
        if(values?.password === "dashboard" &&  values?.userName==="admin@gmail.com" ){
            navigate("./dashboard")

        }
        else{
            alert("Invalid Credentials")
        }

    }



    return(
        <>
            <div className='sighnIn row gx-0'>
            <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 loginleftContainer'>
                <div>
                     
            <p className='primaryheader'>Welcome ! Lets get started</p>
                <img src={img} alt= "login png" className='im-fluid' />
                </div>

            </div>
              
             <div  className='authenticationContainer col-lg-7 col-md-7 col-sm-12 col-xs-12 '>

                   <div className='contentContainer'>
                        <p className='primaryheader'> Sighn In </p>
                        <Formik
                            initialValues={{ userName: '', password: '' }}
                            validationSchema={schema}
                            onSubmit={(values: any) => {
                                handleSighnIn(values)
                               

                            }}>
                            {({ errors, values, touched, setFieldValue }) => {
                                <>{console.log(values, "40.....")}</>
                                return (
                                    <Form
                                        className='signInForm'>
                                        <div className='field'>

                                            <label>UserName:</label>
                                            <Field
                                                type='text'
                                                value={values?.userName}
                                                name="userName"
                                                placeholder='user name'
                                                className="form-control"
                                                Required
                                            />
                                            {errors?.userName && touched?.userName ? <div className='text-danger'> <ErrorMessage name='userName' /></div> : ""}
                                        </div>
                                        <div className='field'>
                                            <label>Password:</label>
                                            <div className='password-container'>
                                                
                                            <Field type={(!showPassWord)?"password":"text"} Required className='form-control' name='password' placeholder='password' value={values.password} 
                                            onChange={(e:any)=>{
                                                if(!e.target.value && showPassWord){setShowPassword(false)}
                                                setFieldValue("password",e.target.value)
                                            }} />
                                            {values.password &&
                                             <span onClick={togglePassword}>{!showPassWord ? <VisibilityIcon/> :<VisibilityOffIcon/>}</span>}
                                            </div>
                                        </div>
                                            {errors?.password && touched?.password ? <div className='text-danger'><ErrorMessage name='password' /></div> : ""}
                                        <div>
                                            <button type='submit' className='login'> Sign In</button>
                                        </div>
                                        

                                    </Form>
                                )
                            }}
                        </Formik>
                        </div>
                        </div>


            </div>
        </>
        )
}
export default Home