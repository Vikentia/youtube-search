import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Select } from 'antd';
import { Slider } from 'antd';

import favoritesAction from '../redux/actions/favoritesAction';

import './AddFavorites.css';

function AddFavorites({ valueRequest, setVisibleFavorites, visibleFavorites }) {

    const { register, handleSubmit, resetFields } = useForm();
    const { Option } = Select;
    const dispatch = useDispatch();
    const array = useSelector(state => state.favorites);


    const onReset = () => {
        // resetFields();
        setVisibleFavorites(false);
    };

    const onFinish = (dataForm) => {
        let user = localStorage.getItem('login');
        let id = array.length + 1;
        const data = { user, id, ...dataForm };
        console.log(data);
        console.log('---');
        // if (!array.filter(obj => obj.request == dataForm.request).length) {
        dispatch(favoritesAction(data))
        // } else {
        //     console.log(array, valueRequest)
        // }
        setVisibleFavorites(false);

    }

    return (
        <div className={visibleFavorites ? 'modal active' : 'modal'}>
            <div className='modal__content'>
                <p>Сохранить запрос</p>

                <Form onFinish={onFinish}>
                    <Form.Item label='Запрос' initialValue={valueRequest} name='request'>
                        <Input id='request' disabled ></Input>
                    </Form.Item>
                    <Form.Item label='Название' name='title'>
                        <Input placeholder='Укажите название' id='title' required ></Input>
                    </Form.Item>
                    <Form.Item label='Сортировать по' name='sort' initialValue="rating">
                        <Select placeholder='Без сортировки' >

                            <Option value="relevance">по релевантности</Option>
                            <Option value="viewCount">по числу просмотров</Option>
                            <Option value="date">по дате загрузки</Option>
                            <Option value="rating">по рейтингу</Option>

                        </Select>
                    </Form.Item>
                    <Form.Item label='Максимальное количество' initialValue={12} name='maxVideos'>
                        <Slider
                            min={12}
                            max={50}
                        />
                    </Form.Item>


                    <Button
                        htmlType="button"
                        onClick={onReset}
                        size={"large"}
                        style={{ width: "210px", marginRight: "10px" }}
                    >
                        Не сохранять
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size={"large"}
                        style={{ width: "210px" }}
                    >
                        Сохранить
                    </Button>
                </Form>


            </div >
        </div >
    )
}

export default AddFavorites