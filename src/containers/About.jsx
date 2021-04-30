import React from 'react'
import Header from '../components/General/Header'
import { Container, Card, Row } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <Header />
            <Container fluid>
                <Row className="justify-content-center align-items-center" style={{height: '85vh'}}>
                <Card style={{ width: '20rem' }} className="shadow-lg">
                    <Card.Img variant="top" src="https://res.cloudinary.com/dqaav1s3t/image/upload/v1619754200/Web/_DSC9684_xvyyki.jpg" />
                    <Card.Body>
                        <Card.Title>Julio Canizalez</Card.Title>
                        <Card.Text>
                            Desarrollador Fullstack, actualmente estudiante de Ingeniería en Desarrollo de Software
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </Row>
            </Container>
        </>
    )
}

export default About
