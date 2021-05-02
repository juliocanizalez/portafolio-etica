import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import LootiePlayer from '../General/LootiePlayer'

const Description = () => {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center align-items-center">
                <Col sm lg="6">
                    <h1 className="text-center display-4">
                        Parte I
                    </h1>
                </Col>
                <Col sm lg="6">
                    <LootiePlayer url='https://assets4.lottiefiles.com/packages/lf20_sSF6EG.json' />
                </Col>
            </Row>
        </Container>
    )
}

export default Description
