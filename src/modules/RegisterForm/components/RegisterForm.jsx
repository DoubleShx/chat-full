import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { ExclamationCircleTwoTone } from '@ant-design/icons'
import './RegisterForm.scss'







const RegisterForm = (props) => {
  const {registerClickedFunc, registerClicked, handleSubmit, values, touched, errors, handleChange, handleBlur} = props
  return (
    <React.Fragment>
        {!registerClicked 
        ? <Form className="formRegister"
      >
          <h1>Регистрация</h1>
          <h3>Для входа в чат, Вам нужно зарегистрироваться</h3>
        <Form.Item
          id="email"
          name="email"
          validateStatus={ !touched.email ? ''
          : errors.email ? 'error' : 'success'}
          help={!touched.email ? null : errors.email}
          hasFeedback
          >
          <Input placeholder="E-mail" onChange={handleChange} onBlur={handleBlur}/>
        </Form.Item>
  
        <Form.Item
          id="password"
          name="password"
          validateStatus = { !touched.password ? '' 
          : errors.password ? 'error': 'success'}
          help={!touched.password ? null : errors.password}
         
          hasFeedback
        >
          <Input.Password placeholder="Password" onChange={handleChange} onBlur={handleBlur}/>
        </Form.Item>
  
        <Form.Item
         id="passwords"
         name="passwords"
         validateStatus = { !touched.passwords ? '' 
         : errors.passwords ? 'error': 'success'}
         help={!touched.password ? null : errors.passwords}        
         hasFeedback          
        >
          <Input.Password placeholder='Confirm Password' onChange={handleChange} onBlur={handleBlur}/>
        </Form.Item>
  
        <Form.Item
          name="nickname"
          tooltip="What do you want others to call you?"
        >
          <Input placeholder="NickName"/>
        </Form.Item>
  
  
          
        <Form.Item 
        className="checkbox-form"
          name="agreement"
          valuePropName="checked"          
        >
            <div className="flex-checkbox">
          <Checkbox>
          <div className="flex-checkbox">
            I have read the agreement
            </div>
          </Checkbox>
          </div>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" size="large" onClick={() => handleSubmit()}>
            Register
          </Button>
        </Form.Item>
        
      </Form>: <MailSend/> }
      <button onClick={()=> console.log(props.values)}>props Register</button>
    
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