import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { Container, Row } from 'react-bootstrap'
import Header from '../components/General/Header'
import { motion } from 'framer-motion'

const NotFound = () => {
    return (
        <Container fluid>
            <Header parteUno="text-secondary mr-2" parteDos="text-secondary" acercaDe="text-secondary" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Row style={{ height: '83vh' }} className="justify-content-center align-items-center">
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
            </motion.div>
        </Container>
    )
}

export default NotFound
