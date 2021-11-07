import React from 'react';
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import {
    SaveOutlined  
  } from '@ant-design/icons';

  import { useNavigate } from 'react-router-dom';

  const { Title, Text } = Typography;

export const Ingresar = () => {

    const navegate = useNavigate();
    const onFinish = (values) => {
        navegate("/escritorio");
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <>
            <Title level={2}> Ingresar</Title>
            <Text>Ingrese su nombre y número de escritorio</Text>
            <Divider />
            <Form
            name="basic"
            labelCol={{
            span: 4,
            }}
            wrapperCol={{
            span: 16,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Nombre del agente"
            name="agente"
            rules={[
                {
                required: true,
                message: 'Ingrese su nombre',
                },
            ]}
            >
            <Input />
            </Form.Item>
    
            <Form.Item
            label="Escritorio"
            name="escritorio"
            rules={[
                {
                required: true,
                message: 'Ingrese el número de escritorio',
                },
            ]}
            >
            <InputNumber min={1} max={99}/>
            </Form.Item>
        
            <Form.Item
            wrapperCol={{
                offset: 4,
                span: 16,
            }}
            >
            <Button 
                type="primary" 
                htmlType="submit"
                shape="round"
            >
                <SaveOutlined />
                Ingresar
            </Button>
            </Form.Item>
        </Form>
      </>
    )
}