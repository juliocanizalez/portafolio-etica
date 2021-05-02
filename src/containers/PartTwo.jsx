import React from 'react'
import Header from '../components/General/Header'
import Footer from '../components/General/Footer'
import Description from '../components/PartTwo/Description'
import { motion } from 'framer-motion'

const PartTwo = () => {
    return (
        <>
            <Header parteUno="text-secondary mr-3" parteDos="text-dark mr-3" acercaDe="text-secondary" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Description />
                <Footer />
            </motion.div>
        </>
    )
}

export default PartTwo
