import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

import {ColorRing} from "react-loader-spinner";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import * as studentService from "../services/studentService";

export function StudentCreate() {
    const navigate = useNavigate();

    return (
        <>
        <Formik
            initialValues={{
                name: '',
                age: '19',
                gender: '0',
                languages: ['C#', 'JAVA']
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Nhap ten.")
                    .matches(/^C11_[a-z,A-Z]+$/, "Please input name with format C11_XXXX."),
                age: Yup.number().integer()
                    .min(18)
                    .max(50)
            })}
            onSubmit={(values, {setSubmitting})=>{
                //Call POST api
                // setTimeout(() => { //giả lập gọi server
                //     console.log(values)
                //     setSubmitting(false)
                //     toast(`Student ${values.name} create OK!`)
                //     navigate('/')
                // }, 1000)

                const create = async () => {
                    await studentService.save(values)
                    setSubmitting(false)
                    toast(`Student ${values.name} create OK!`)
                    navigate('/')
                }
                create();

            }}
        >
            {
                ({isSubmitting}) => (
                    <div className='container'>
                        <h1>Create Student</h1>
                        <Form>
                            <div className='mb-3'>
                                <label htmlFor='studentName' className='form-label'>Name</label>
                                <Field type='text' className='form-control' id='studentName'
                                       name='name'
                                />
                                <ErrorMessage name='name' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='studentAge' className='form-label'>Age</label>
                                <Field type='number' className='form-control' id='studentAge'
                                       name='age'
                                />
                                <ErrorMessage name='age' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <div className="form-check form-check-inline">
                                    <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                           value="1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Field className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                           value="0"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                                </div>
                            </div>

                            <label htmlFor='studentAge' className='form-label'>Languages</label>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="C#" name="languages" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    C#
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="JAVA" name="languages" id="cb1"/>
                                <label className="form-check-label" htmlFor="cb1">
                                    JAVA
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="ReactJS" name="languages" id="cb2"/>
                                <label className="form-check-label" htmlFor="cb2">
                                    ReactJS
                                </label>
                            </div>
                            {
                                isSubmitting ?
                                    <ColorRing
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    />
                                    :
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                            }
                        </Form>
                    </div>
                )
            }
        </Formik>
        {/*<ToastContainer />*/}
        </>
    )
}
