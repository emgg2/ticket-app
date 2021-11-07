import React, {useState} from 'react'
import { Row, Col, Typography, Button, Divider } from 'antd';
import {
    CloseCircleOutlined ,
    RightOutlined 
  } from '@ant-design/icons';
import useHideMenu from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

export const Escritorio = () => {
    
    useHideMenu(false); 
    const navegate = useNavigate();
    const [usuario] = useState( getUsuarioStorage() );

    const salir = () => {
        localStorage.removeItem("agente");
        localStorage.removeItem('escritorio');
        navegate("/ingresar");
        console.log("saliendo");
    }

    const siguienteTicket = () => {
        console.log("siguiente ticket");
    }

    if(!usuario.agente || !usuario.escritorio) {
        console.log("pasa");
        navegate("/ingresar"); 
      }

    return (
        <>

            <Row>
                <Col span={ 20 }>
                    <Title level={ 2 }>{ usuario.agente}</Title>
                    <Text>Usted está trabajando en el escritorio: </Text>
                    <Text type="success">{usuario.escritorio}</Text>
                </Col>
                <Col span={4} align="right">
                    <Button 
                        shape="round"

                        type="danger"
                        onClick={ salir }>
                        <CloseCircleOutlined /> 
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider />

            <Row>
                <Col>
                <Text> Está atendiendo el ticket número: </Text>
                <Text 
                    style={{ fontSize: 30}} 
                    type="danger"
                > 
                55 
                </Text>
                </Col>
            </Row>

            <Row>
                <Col offset={ 18 } span={ 6 } align="right">
                    <Button
                        onClick={ siguienteTicket }
                        shape="round"
                        type="primary"
                        >
                            <RightOutlined />
                            Siguiente
                        </Button>
                </Col>
            </Row>


        </>
    )
}
