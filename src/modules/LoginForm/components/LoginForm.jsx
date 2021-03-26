import React, { Component } from 'react' 
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button } from '../../../components/index'
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {
    render () {
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
          }
        return (
            <div>
            <h2>Войти в Аккаунт</h2>
            <p>Пожалуйста, войдите в свой аккаунт</p>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
  
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                Войти в аккаунт
              </Button>
            </Form.Item>
  
            <Form.Item>
              <Link className="registerLink" to="/register">Зарегистрироваться</Link>
            </Form.Item>
  
          </Form>
          </div>
        )
    }
}

