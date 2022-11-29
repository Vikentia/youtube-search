import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import { EyeOutlined, EyeInvisibleOutlined, NodeExpandOutlined } from '@ant-design/icons';

import logo from '../assets/image/sibdev-logo.png';
import styles from './NewForm.module.scss';


const NewForm = ({ logIn, setLogIn }) => {
    const [visible, setVisible] = React.useState(false);

    const handleClick = (e) => {
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
            // console.log(response)
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
        <div className={styles.container}>
            <div>
                <div className={styles.form__logo}>
                    <img src={logo} alt='logo' />
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}     >
                    <Form className={styles.form}>

                        <h3 className={styles.form__title}>Вход</h3>
                        <div className={styles.form__block}>
                            <label className={styles.form__lable} htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className={styles.form__input}
                            />
                            <ErrorMessage component="div" className={styles.error} name="email" />
                        </div>

                        <div className={styles.form__block}>
                            <label className={styles.form__lable} htmlFor="currency">Пароль</label>

                            <Field
                                id="password"
                                name="password"
                                type={visible ? "text" : "password"}
                                className={styles.form__input}
                            />

                            <button onClick={(e) => handleClick(e)} className={styles.form__input_btn}>
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

                            <ErrorMessage component="div" className={`${styles.error} ${styles.afterVisible}`} name="password" />
                            {/* <ErrorMessage component="div" className={styles.error} name="password" /> */}
                        </div>

                        <div>   <button className={styles.form__btn} type="submit" >Войти</button>      </div>

                    </Form>
                </Formik>
            </div >
        </div >
    );
}

export default NewForm;