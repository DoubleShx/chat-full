import React, { Component } from 'react' 
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button } from '../../../components/index'
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {
    render () {
      const {handleSubmit, values, touched, errors, handleChange, handleBlur} = this.props
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
          }
        return (
            <div>
            <h2>Войти в Аккаунт</h2>
            <p>Пожалуйста, войдите в свой аккаунт</p>
            <Form
            onSubmit = {handleSubmit}
          >
            <Form.Item
              name="email"
              validateStatus={!touched.email ? null 
              : errors.email? "error" : 'success'}
              help={!touched.email ? null : errors.email}
              hasFeedback
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" onChange={handleChange} onBlur={handleBlur}/>
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus = { !touched.password ? '' 
              : errors.password ? 'error': 'success'}
              help={!touched.password ? null : errors.password}
              hasFeedback

            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
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

