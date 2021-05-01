import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import LootiePlayer from '../General/LootiePlayer'

const Description = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col sm lg="6">
                    <h1 className="text-center">
                        Parte I
                    </h1>
                    <h5 className="font-weight-normal text-center">
                        Plantear dos casos hipotéticos de un Ingeniero en Desarrollo de Software en los que se observe:
                    </h5>
                    <p className="text-dark text-center font-weight-light">Un acto humano bueno, un acto humano malo</p>
                </Col>
                <Col sm lg="6">
                    <LootiePlayer url='https://assets7.lottiefiles.com/private_files/lf30_WdTEui.json' />
                </Col>
            </Row>
        </Container>
    )
}

export default Description
