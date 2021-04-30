import React from 'react'
import Header from '../components/General/Header'
import Footer from '../components/General/Footer'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <Header parteUno="text-secondary mr-2" parteDos="text-secondary" acercaDe="text-secondary" />
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
                            <Player
                                autoplay
                                loop
                                src='https://assets6.lottiefiles.com/packages/lf20_eijHZ0.json'
                                style={{ height: 'auto', width: '90%' }}
                            >
                                <Controls visible={false}></Controls>
                            </Player>
                        </Col>

                    </Row>
                </Container>
                <Footer />
            </motion.div>

        </>
    )
}

export default Home
