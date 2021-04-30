import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear()

    return (
        <footer className="text-center">
            Julio Canizalez, &#169; {year} Copyright All Rights Reserved
        </footer>
    )
}

export default Footer
