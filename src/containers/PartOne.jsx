import React from 'react'
import Header from '../components/General/Header'
import Footer from '../components/General/Footer'
import Description from '../components/PartOne/Description'
import Content from '../components/PartOne/Content'
import { motion } from 'framer-motion'
import '../assets/styles/style.css'

const PartOne = () => {
    return (
        <>
            <Header parteUno="text-dark mr-3" parteDos="text-secondary mr-3" acercaDe="text-secondary" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Description />
                <Content />
                <Footer />
            </motion.div>
        </>
    )
}

export default PartOne
