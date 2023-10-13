import React from 'react'
import Formulario from './Formulario'

const Contacto = () => {
    return (
        <section id='contacto' className='mt-5 mb-5'>
            <div className="container pt-5 pb-5">
                <div className="row justify-content-between flex-md-row align-items-center flex-column">

                    <div className="col-10 col-md-5">
                        <h1 className="fw-light mb-2 text-center text-md-start mb-4 mb-md-2" >Contactanos</h1>
                        <div className="d-flex flex-column redes mb-2 fw-light ">
                            <a href="#" >
                                <p className='d-flex align-items-center '> <i class='bx bxl-instagram me-1'></i> NewDesignPy</p>
                            </a>
                            <a href="#">
                                <p className='d-flex align-items-center '> <i class='bx bxs-phone me-1'></i> +595 0983 123123</p>
                            </a>
                            <a href="#">
                            </a>
                            <a href="#">
                                <p className='d-flex align-items-center '> <i class='bx bxl-gmail me-1'></i> info@newdesignarq.com.py</p>
                            </a>
                        </div>
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.70734267309!2d-54.61595636467257!3d-25.546858459631835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f6a61b1ebf570b7%3A0xd1466ed8de714373!2sNew%20Design%20Arquitectura!5e0!3m2!1ses!2spy!4v1697030364994!5m2!1ses!2spy"
                            width="100%"
                            height="300"
                            style={{ border: '0', borderRadius: '10px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="col-10 col-md-6 mt-5 mt-md-0">
                        <Formulario />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto