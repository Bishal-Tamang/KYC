'use client'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './style.scss';
import '../../src/app/App.css'
import '../../src/app/index.css'

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const login = () => {
    return(
        <div className="kyc__login-container">
            <h1>Login</h1>
            <div className="form-field">
            <Form
              
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 20,
              }}
              style={{
                maxWidth: 800,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout = "vertical"
            >
          
                <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
          
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
          
            
          
              <Form.Item className='check'
                name="remember"
                valuePropName="checked"
               >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

             
          
              <div className="btn">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                   Login
                  </Button>
                </Form.Item>
              </div>

              <p>Not a member? <a href='./SignUp'>Register Now</a></p>
            </Form>
            </div>
              
        </div>
    )
}
   


export default login;