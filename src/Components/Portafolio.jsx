import React from 'react'
import imagen_1 from "../Assets/nro1.png"
import imagen_2 from "../Assets/nro2.png"
import imagen_3 from "../Assets/nro3.png"
import imagen_4 from "../Assets/nro4.png"
import imagen_5 from "../Assets/nro5.png"
import imagen_6 from "../Assets/nro6.png"

const Portafolio = () => {
    return (
        <section id='portafolio' >
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className='text-center'>
                            <h1 className='display-4'>Portafolio</h1>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="portafolio-item image-zoom mb-4">
                            <div className="image-zoom-warpper">
                                <img src={imagen_1} alt="" />

                            </div>
                            <a href={imagen_1} data-fancybox="gallery" className='iconbox'>
                                <i class='bx bx-search'></i>
                            </a>
                        </div>

                        <div className="portafolio-item image-zoom mt-4">
                            <div className="image-zoom-warpper">
                                <img src={imagen_3} alt="" />

                            </div>
                            <a href={imagen_3} data-fancybox="gallery" className='iconbox'>
                                <i class='bx bx-search'></i>
                            </a>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="portafolio-item image-zoom mb-4">
                            <div className="image-zoom-warpper">
                                <img src={imagen_2} alt="" />

                            </div>
                            <a href={imagen_2} data-fancybox="gallery" className='iconbox'>
                                <i class='bx bx-search'></i>
                            </a>
                        </div>

                        <div className="portafolio-item image-zoom mt-4">
                            <div className="image-zoom-warpper">
                                <img src={imagen_4} alt="" />

                            </div>
                            <a href={imagen_4} data-fancybox="gallery" className='iconbox'>
                                <i class='bx bx-search'></i>
                            </a>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="portafolio-item image-zoom mb-4">
                            <div className="image-zoom-warpper">
                                <img src={imagen_5} alt="" />

                            </div>
                            <a href={imagen_5} data-fancybox="gallery" className='iconbox'>
                                <i class='bx bx-search'></i>
                            </a>
                        </div>

                        <div className="portafolio-item image-zoom mt-4">
                            <div className="image-zoom-warpper">
                                <img src={imagen_6} alt="" />

                            </div>
                            <a href={imagen_6} data-fancybox="gallery" className='iconbox'>
                                <i class='bx bx-search'></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portafolio