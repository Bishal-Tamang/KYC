import React from "react";
import {Steps, Button, Checkbox, DatePicker, Form, Input, InputNumber, Row, Col, Radio, Select} from 'antd';
import './style.scss'
const step1 = (onFinish) =>{


    

    return(
        <div className="kyc__form-container">
            <div className="kyc__form-container-heading">
                <h1>A. Identity Details</h1>
            </div>
           

            <div className="form-field">
                <Form 
                labelCol={{span: 16}}
                wrapperCol={{span: 14}}
                layout="vertical"
                
                >
                    {/*Full Name Section*/}

                <Row gutter={16}>
                    <Col span={11} style={{marginRight:'4px'}}>
                        <Form.Item label="Name of Applicant" name="firstName">
                            <Input  style={{ width: '240px' }} placeholder="First Name" required={true}/>
                        </Form.Item>
                    </Col>

                    <Col span={11} style={{marginRight:'8px'}}>
                        <Form.Item label=" " name="lastName">
                            <Input style={{ width: '240px' }} placeholder="Last Name" required={true}/>
                        </Form.Item>
                    </Col>
                </Row>

                        {/*Gender and Marial Status*/}

                <Row gutter={16}>
                 <Col span={12}>
                    <Form.Item label="Gender:" >
                         <Radio.Group required={true} style={{display: "flex", flexDirection: "column"}}>
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item label="Marital Status:">
                        <Radio.Group required={true} style={{display: "flex", flexDirection: "column"}}>
                            <Radio value="single">Single</Radio>
                            <Radio value="married">Married</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                </Row>

                        {/*Date of Birth Section*/}

                <Form.Item label="Date of Birth:">
                 <DatePicker required={true} style={{width: '100%'}} placeholder="YYYY-MM-DD"/>
                </Form.Item>


                        {/*Ethinicity Section*/}

                <Form.Item label="Ethinicity:">
                    <Select required={true}>
                        <Select.Option value="Hindu">Hindu</Select.Option>
                        <Select.Option value="Hindu">Muslim</Select.Option>
                        <Select.Option value="Hindu">Christain</Select.Option>
                        <Select.Option value="Hindu">Buddhism</Select.Option>
                    </Select>
                </Form.Item>

                        {/*Status Section*/}

                <Form.Item label="Status:">
                    <Radio.Group required={true} style={{display: "flex", flexDirection: "column"}}>
                        <Radio value="resident"> Resident Individual </Radio>
                        <Radio value="non-resident"> Non Resident </Radio>
                        <Radio value="foreign"> Foreign National </Radio>
                    </Radio.Group>
                </Form.Item>

                        {/*PAN Section*/}

                <Form.Item label="PAN">
                    <Input type='number' required={true}/>
                </Form.Item>

                <Button type="primary" htmlType="submit" id="btn" onFinish={onFinish} style={{backgroundColor: "#1890ff", color: "white"}}>Continue</Button>
                </Form>
            </div>
        </div>
    )
}

export default step1;