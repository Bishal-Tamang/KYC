import React from 'react'
import {Upload, Form, Label} from 'antd'
import { PlusOutlined } from '@ant-design/icons'; 
import './style.scss'

const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

const step3 = () =>{
    return(
        <div className="kyc__form-container">

            <div className="kyc__form-container-heading">
                <h1>C. File Upload</h1>
                <p>Please upload related photographs and documents.</p>
            </div>

            <div className="form-field">

                <Form>
                    <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                 style={{
                                        marginTop: 8,
                                        }}
                             >Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}

export default step3;