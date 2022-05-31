import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Select } from 'antd';
import { Slider } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { favoritesAction } from '../redux/actions/favoritesAction';

import './AddFavorites.css';

function ChangeFavorites() {

    const { Option } = Select;
    const dispatch = useDispatch();
    const array = useSelector(state => state.favorites);


    const onReset = () => {

    };

    const onFinish = (dataForm) => {

    }

    return (
        <div className={visibleFavorites ? 'modal active' : 'modal'}>
            <div className='modal__content'>
                <p>Сохранить запрос</p>

                <Form onFinish={onFinish}>
                    <Form.Item label='Запрос' initialValue={valueRequest} name='request'>
                        <Input id='request' ></Input>
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