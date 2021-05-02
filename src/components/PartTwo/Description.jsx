import React from 'react'
import LootiePlayer from '../General/LootiePlayer'
import {Container, Row, Col} from 'react-bootstrap'

const Description = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col sm lg="6">
                    <h1 className="text-center display-4">
                        Parte II
                    </h1>
                    <p className="text-center font-weight-light">Responder</p>
                </Col>
                <Col sm lg="6">
                    <LootiePlayer url='https://assets7.lottiefiles.com/private_files/lf30_WdTEui.json' />
                </Col>
            </Row>
        </Container>
    )
}

export default Description
