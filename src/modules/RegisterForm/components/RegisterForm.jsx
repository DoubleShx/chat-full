import React, { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { ExclamationCircleTwoTone } from '@ant-design/icons'
import './RegisterForm.scss'




const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};


const RegisterForm = ({registerClickedFunc, registerClicked}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);



  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <React.Fragment>
        {!registerClicked 
        ? <Form className="formRegister"
    
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >
          <h1>Регистрация</h1>
          <h3>Для входа в чат, Вам нужно зарегистрироваться</h3>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="E-mail"/>
        </Form.Item>
  
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password"/>
        </Form.Item>
  
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder='Confirm Password'/>
        </Form.Item>
  
        <Form.Item
          name="nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="NickName"/>
        </Form.Item>
  
  
          
        <Form.Item 
        className="checkbox-form"
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          
        >
            <div className="flex-checkbox">
          <Checkbox>
          <div className="flex-checkbox">
            I have read the <a href="">agreement</a>
            </div>
          </Checkbox>
          </div>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" size="large" onClick={() => registerClickedFunc()}>
            Register
          </Button>
        </Form.Item>
        
      </Form>: <MailSend/> }
    
    </React.Fragment>
  );
};


const MailSend = () => {
    return(
        <div className="formRegister MailSend">
            <ExclamationCircleTwoTone className="mailSendIcon"/>
            <h1>Подтвердите свой аккаунт</h1>
            <h3>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</h3>

        </div>
    )
}


export default RegisterForm;