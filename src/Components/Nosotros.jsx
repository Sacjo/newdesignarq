import React from 'react'
import nosotrosImg from "../Assets/nosotros.jpg";

const Nosotros = () => {
  return (
    <section id='nosotros' className='mt-5 mb-5'>
      <div className="container">

        <div className="row">
          <div className="col-12 mt-5">
            <div className='text-center'>
              <h1 className='display-1 fw-light mb-4 '>Nosotros</h1>
            </div>

            <div className='d-flex justify-content-center'>
              <p className='col-10 mb-5 fw-light'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla veritatis ipsum amet natus maiores, rerum incidunt suscipit libero vel. Ipsum, officiis. Sint illum rem perspiciatis voluptas sit autem corrupti perferendis.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 col-lg-5">
            <img className='imagen' src={nosotrosImg} alt="" />
          </div>
          <div className="col-10 col-lg-5">
            <h1 className='mt-4 mt-md-0 fw-light'>New Design</h1>
            <p className='mb-3 fw-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ipsum cumque, qui aliquam quibusdam ullam sapiente, saepe eius adipisci commodi tempora ut cupiditate explicabo porro, quod quae. Esse, eius doloremque? <a href="https://maps.app.goo.gl/rzCS7mj9CrDda8gHA" target="_blank" rel="noopener noreferrer"> <b>Ubicacion</b> </a></p>
            
            <div className="d-flex col-12">
              <div className=" me-2">
                <i class='bx bx-pin' ></i>
              </div>
              <div >
                <h5 className='fw-light'>Mision</h5>
                <p className='fw-light'>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa in consequatur officiis quos, dolore vero. </p>

              </div>
            </div>
            <div className="d-flex col-12" >
              <div className=" me-2">
                <i class='bx bx-paper-plane'></i>
              </div>
              <div >
                <h5 className='fw-light'>Vision</h5>
                <p className='fw-light'>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa in consequatur officiis quos, dolore vero. </p>

              </div>
            </div>
            <div className="d-flex col-12">
              <div className=" me-2">
                <i class='bx bx-network-chart'></i>
              </div>
              <div >
                <h5 className='fw-light'>Valores</h5>
                <p className='fw-light'>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa in consequatur officiis quos, dolore vero. </p>

              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Nosotros