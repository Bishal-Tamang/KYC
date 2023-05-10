import react from 'react'
import './style.scss'
import {Input, Form,Button, Label,Checkbox, InputNumber, Radio, Select, Step, Row, Col} from 'antd';
const step2 = (onFinish) =>{
    return(
        <div className="kyc__form-container">
            <div className="kyc__form-container-heading">
                <h1>B. Address Details</h1>
            </div>

            <div className="form-field">

                <Form
                    labelCol={{span: 16}}
                    wrapperCol={{span: 14}}
                    layout='vertical'
                    className='section__padding'
                >

                    <Form.Item label="Address for Correspondence">
                        <Input required={true} placeholder='Street Address'/>
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={11} style={{marginRight:'4px'}}>
                            <Form.Item label="City" name="current-city">
                                <Input  style={{ width: '240px' }} placeholder="City" required={true}/>
                            </Form.Item>
                        </Col>

                        <Col span={11} style={{marginRight:'8px'}}>
                            <Form.Item label="Province" name="current-province">
                                <Input style={{ width: '240px' }} placeholder="Province" required={true}/>
                            </Form.Item>
                        </Col>
                    </Row>
                   

                    {/* <Form.Item label="Postal/ Zip Code:">
                        <Input required={true} placeholder='Postal/ Zip Code' name='Zip-code'
                            rules={[
                                {
                                    type: 'number',
                                    message: 'The input is not valid Postal'
                                },
                                {
                                    required: true,
                                    message: 'Please input your Postal'
                                }
                                ]}
                        />
                    </Form.Item> */}

                      <Form.Item name="current-postal" label="Postal Code/ Zip Code"
                             rules={[
                                        {
                                            type: 'number',
                                            message: 'The input is not valid Zip Code',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your Zip Code',
                                        },
                                    ]}
                    >
                                        <Input />
                    </Form.Item>

                    <Form.Item label="Phone Number:">
                        <Input type='number' required={true} placeholder='(+977)'/>
                    </Form.Item>
        

                    <Form.Item name="email" label="E-mail"
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
                                        <Input />
                    </Form.Item>

                    <Form.Item label="Permanent Address">
                        <Input required={true} placeholder='Street Address'/>
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={11} style={{marginRight:'4px'}}>
                            <Form.Item label="City" name="permanent-city">
                                <Input  style={{ width: '240px' }} placeholder="City" required={true}/>
                            </Form.Item>
                        </Col>

                        <Col span={11} style={{marginRight:'8px'}}>
                            <Form.Item label="Province" name="permanent-province">
                                <Input style={{ width: '240px' }} placeholder="Province" required={true}/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="permanent-postal" label="Postal Code/ Zip Code"
                             rules={[
                                        {
                                            type: 'number',
                                            message: 'The input is not valid Zip Code',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your Zip Code',
                                        },
                                    ]}
                    >
                                        <Input />
                    </Form.Item>
        

                    <Form.Item name="agreement"valuePropName="checked"
                        rules={[
                                    {
                                        validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                    },
                                ]}
                    >
                        <Checkbox>
                            I have read the agreement
                        </Checkbox>
                    </Form.Item>

                    <Button type="primary" htmlType="submit" id="btn" onFinish={onFinish} style={{backgroundColor: "#1890ff", color: "white"}}>Continue</Button>
                </Form>
            </div>
        </div>
    )
}

export default step2;