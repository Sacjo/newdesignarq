import React from 'react'
import Proyectos from './serv/Proyectos'
import Construcciones from './serv/Construcciones'
import Amoblamientos from './serv/Amoblamientos'

const Servicios = () => {
    return (
        <section id='servicios' className='mt-5 mb-5'>
            <div className="container">
                <div className="row "  id='proyectos'>
                    <div className="col-12 text-center mb-5">
                        <div className='text-center'>
                            <h1 className='display-1 fw-light mb-4'>Servicios</h1>
                            <h2 className='display-3 fw-light mb-3'>Proyectos</h2>
                            {/* <a href="#">Ver Más</a> */}
                        </div>
                    </div>
                </div>
                <Proyectos />
                <div className="row mt-5 " id='construcciones'>
                    <div className="col-12 text-center">
                        <div className='text-center mt-5 mb-5'>
                            <h2 className='display-3 fw-light mt-5 mb-3'>Construcciones</h2>
                            {/* <a href="#">Ver Más</a> */}
                        </div>
                    </div>
                </div>
                <Construcciones />
                <div className="row mt-5 " id='amoblamientos'>
                    <div className="col-12 text-center">
                        <div className='text-center mt-5 mb-5'>
                            <h2 className='display-3 fw-light mt-5 mb-3'>Amoblamientos</h2>
                            {/* <a href="#">Ver Más</a> */}
                        </div>
                    </div>
                </div>
                <Amoblamientos />

            </div>

        </section>
    )
}

export default Servicios