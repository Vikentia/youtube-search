import React from "react";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import logo from '../assets/image/sibdev-logo.png';
import './NewForm.css';



function NewForm({ logIn, setLogIn }) {
    const [visible, setVisible] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        setVisible(!visible);
    }

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Неправильный email адрес')
            .required('Обязательное поле!'),
        password: Yup.string()
            .min(4, 'Минимум 4 символа для заполнения')
            .required('Обязательное поле!'),
    })

    const onSubmit = async (values) => {
        const authData = {
            login: values.email,
            password: values.password,
            returnToken: true
        }
        try {
            const response = await axios.post('https://typ-back-end.herokuapp.com/api/login', authData)
            console.log(response)
            if (response.data.isAuth) {
                localStorage.setItem('login', values.email);
                localStorage.setItem('token', response.data.token);
                setLogIn(!logIn);
            } else {
                alert('Неверные данные пользователя')
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            <div>
                <div className="form-logo">
                    <img src={logo} alt='logo' />
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}     >
                    <Form className="form">

                        <h3 className="form-title">Вход</h3>
                        <div className="form-block">
                            <label className="form-lable" htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className="form-input"
                            />
                            <ErrorMessage component="div" className="error" name="email" />
                        </div>

                        <div className="form-block">
                            <label className="form-lable" htmlFor="currency">Пароль</label>

                            <Field
                                id="password"
                                name="password"
                                type={visible ? "text" : "password"}
                                className="form-input"
                            />

                            <button onClick={(e) => handleClick(e)} className="form-input-btn">
                                {visible
                                    ? <EyeOutlined
                                        style={{
                                            fontSize: 24,
                                            color: '#1890ff',
                                        }} />
                                    : <EyeInvisibleOutlined
                                        style={{
                                            fontSize: 24,
                                            color: '#D1D1D1',
                                        }} />
                                }
                            </button>

                            <ErrorMessage component="div" className="error afterVisible" name="password" />
                        </div>

                        <div>   <button className="form-btn" type="submit" >Войти</button>      </div>

                    </Form>
                </Formik>
            </div >
        </div >
    );
}

export default NewForm;