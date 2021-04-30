import React from 'react'
import Header from '../components/General/Header'
import Footer from '../components/General/Footer'
import { Container, Card, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
            <Header parteUno="text-secondary mr-2" parteDos="text-secondary" acercaDe="text-dark" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Container fluid>
                    <Row className="justify-content-center align-items-center" style={{ height: '85vh' }}>
                        <Card style={{ width: '20rem' }} className="shadow-lg">
                            <Card.Img variant="top" src="https://res.cloudinary.com/dqaav1s3t/image/upload/v1619754200/Web/_DSC9684_xvyyki.jpg" />
                            <Card.Body>
                                <Card.Title className="text-center">Julio Canizalez</Card.Title>
                                <Card.Text className="text-center">
                                    Desarrollador Fullstack, actualmente estudiante de Ingeniería en Desarrollo de Software
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </motion.div>
        </>
    )
}

export default About
