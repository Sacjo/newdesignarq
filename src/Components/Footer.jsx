import React from 'react'
import logo from "../Assets/logonew@3x.png"

const Footer = () => {
    return (
        <footer className='bg-oscuro'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-auto text-white fw-light footer-text">
                        <p className='mb-3 mt-3 text-center'>&copy; 2023 New Design - Todos los derechos reservados. <br /> Designed by <a className='text-white' href="https://www.instagram.com/danisanchez13ds/" target="_blank">DsCode</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer