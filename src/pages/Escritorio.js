import React, {useState, useContext} from 'react'
import { Row, Col, Typography, Button, Divider } from 'antd';
import {
    CloseCircleOutlined ,
    RightOutlined 
  } from '@ant-design/icons';
import useHideMenu from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

export const Escritorio = () => {
    
    useHideMenu(false); 
    const navegate = useNavigate();
    const [usuario] = useState( getUsuarioStorage() );
    const { socket }  = useContext( SocketContext );
    const [ticket, setTicket] = useState(null)

    const salir = () => {
        localStorage.removeItem("agente");
        localStorage.removeItem('escritorio');
        navegate("/ingresar");
        console.log("saliendo");
    }

    const siguienteTicket = () => {
        socket.emit ('siguiente-ticket-trabajar', usuario, ( ticket ) => {
            setTicket(ticket);
        }); 
    }

    if(!usuario.agente || !usuario.escritorio) {
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

            {
                ticket && (
                    <Row>
                    <Col>
                    <Text> Está atendiendo el ticket número: </Text>
                    <Text 
                        style={{ fontSize: 30}} 
                        type="danger"
                    > 
                    { ticket.numero } 
                    </Text>
                    </Col>
                </Row>

                )
            }
         

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
