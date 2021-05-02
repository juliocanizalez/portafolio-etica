import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear()

    return (
        <footer className="text-center pt-5 pb-2 mt-5">
            Julio Canizalez, &#169; {year} Copyright All Rights Reserved
        </footer>
    )
}

export default Footer
