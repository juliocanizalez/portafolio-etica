import React from 'react'
import LootiePlayer from '../General/LootiePlayer'
import {Container, Row, Col} from 'react-bootstrap'

const Description = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col sm lg="6">
                    <h1 className="text-center">
                        Parte II
                    </h1>
                </Col>
                <Col sm lg="6">
                    <LootiePlayer url='https://assets2.lottiefiles.com/packages/lf20_jCWSsE.json' />
                </Col>
            </Row>
        </Container>
    )
}

export default Description
