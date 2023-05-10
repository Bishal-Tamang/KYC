'use client'
import React from "react";
import './style.scss'
import {Button, Label, Input, Form} from 'antd'
import {useRef, useState} from 'react'




const signup = () =>{

  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirm: ''
  });

  const formRef = useRef(null);

  const handleInputChange = (event) =>{
    const { name, value} = event.target;
    setFormState((prevState) =>({
      
        ...prevState,
        [name]: value,
      
    }));
  }

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const handleSubmit = (event) =>{
  event.preventDefault();

  onFinish();

  formRef.current.reset();
  setFormState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirm: ''
  })
}
    return(
        <div className="kyc__login-container">
            <h1>SignUp</h1>
            <div className="form-field">
            <Form 
                initialValues={{remember: true,}}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onSubmit= {handleSubmit}
                ref={formRef}
                
                > 

                <Form.Item label="Name" name="name" placeholder="Fullname"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter your full name!',
                    }
                    
                    ]}
              >
                <Input />
              </Form.Item>

                <Form.Item label="Username" name="username" placeholder="Username"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter your username!',
                    },
                    ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email" placeholder="Email"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter your Email!',
                    },
                    {
                        type: "email",
                        message: 'Please enter a valid Email',
                    },
                    ]}
              >
                <Input />
              </Form.Item>

              

<Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
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
              return Promise.reject(new Error('Sorry Your Password do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>





                <div className="btn">
                    <Button type="primary" htmlType="submit" >Sign Up</Button>
                </div>

                <p>Already a member? <a href="./Login">Login Here</a></p>
            </Form>
        </div>
        </div>
    )
}

export default signup;