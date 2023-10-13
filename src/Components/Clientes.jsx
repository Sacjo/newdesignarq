import React, { useState, useEffect } from 'react';
import clienteImg_1 from "../Assets/zara1.png";

const Clientes = () => {
    const [clientesCount, setClientesCount] = useState(0);
    const [proyectosCount, setProyectosCount] = useState(0);

    useEffect(() => {
        const clientesInterval = setInterval(() => {
            setClientesCount(prevCount => {
                if (prevCount >= 54) {
                    clearInterval(clientesInterval);
                    return 54; //hasta que punto llegas
                }
                return prevCount + 2;
            });
        }, 80);

        const proyectosInterval = setInterval(() => {
            setProyectosCount(prevCount => {
                if (prevCount >= 100) {
                    clearInterval(proyectosInterval);
                    return 100; //hasta que punto llegas
                }
                return prevCount + 2;
            });
        }, 80);

        return () => {
            clearInterval(clientesInterval);
            clearInterval(proyectosInterval);
        };
    }, []);

    return (
        <section id='clientes' className='mt-5 mb-5 pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className='text-center'>
                            <h1 className='display-1 fw-light mb-5'>Clientes</h1>
                        </div>
                    </div>
                </div>

                <div className="row mb-5 justify-content-center">
                    <div className="col-4 col-md-4 d-flex justify-content-center mb-5 m-3 m-md-0">
                        <img className='imagenCliente' src={clienteImg_1} alt="" />
                    </div>
                    <div className="col-4 col-md-4 d-flex justify-content-center mb-5 m-3 m-md-0">
                        <img className='imagenCliente' src={clienteImg_1} alt="" />
                    </div>
                    <div className="col-4 col-md-4 d-flex justify-content-center mb-5 m-3 m-md-0">
                        <img className='imagenCliente' src={clienteImg_1} alt="" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6 d-flex align-items-center flex-column mb-5">
                        <h1 className='display-4'>{clientesCount}+</h1>
                        <h5 className='mt-3 mb-3 fw-light'>Clientes</h5>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex align-items-center flex-column mb-5">
                        <h1 className='display-4'>{proyectosCount}+</h1>
                        <h5 className='mt-3 mb-3 fw-light'>Proyectos</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clientes;