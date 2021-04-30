import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { Container, Row } from 'react-bootstrap'
import Header from '../components/General/Header'


const NotFound = () => {
    return (
        <Container fluid>
            <Header/>
            <Row style={{height: '83vh'}} className="justify-content-center align-items-center">
                <Player
                    autoplay
                    loop
                    src='https://assets3.lottiefiles.com/private_files/lf30_3X1oGR.json'
                    style={{ height: 'auto', width: '60%' }}
                >
                    <Controls visible={false}></Controls>
                </Player>
            </Row>
            <h4 className="font-weight-light text-dark text-center">Lo sentimos, no econtramos la página que buscas</h4>

        </Container>
    )
}

export default NotFound
