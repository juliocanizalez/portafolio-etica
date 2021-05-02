import React from 'react'
import Header from '../components/General/Header'
import Footer from '../components/General/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import LootiePlayer from '../components/General/LootiePlayer'

const Home = () => {
    return (
        <>
            <Header parteUno="text-secondary mr-3" parteDos="text-secondary mr-3" acercaDe="text-secondary" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Container>
                    <Row style={{ height: '85vh' }} className="justify-content-center align-items-center">
                        <Col sm lg="6">
                            <h1 className="text-center">
                                Portafolio Digital
                            </h1>
                            <h4 className="font-weight-light mt-3 text-center">
                                Aplicación de Principios de la Ética Profesional
                            </h4>
                        </Col>
                        <Col sm lg="6">
                            <LootiePlayer url='https://assets6.lottiefiles.com/packages/lf20_eijHZ0.json' />
                        </Col>

                    </Row>
                </Container>
                <Footer />
            </motion.div>

        </>
    )
}

export default Home
