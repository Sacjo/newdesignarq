import React from 'react'

const Header = () => {
    return (
        <section id='inicio' className=' d-flex align-items-center text-center zoom-effect'>
            <div className='container'>
                <div className='row min-vh-100 align-content-end '>
                    <div className="col-12 text-white">
                        <div>

                            <h1 className='titulo-header '>NEW DESIGN </h1>
                        </div>
                        <div>
                            <h1 className='titulo-header-sub'>ARQUITECTURA</h1>
                        </div>
                    </div>

                    <div className='col-12 '>
                        <a href="#nosotros"><i class='bx bx-chevron-down mb-4' ></i></a>


                    </div>
                </div>
            </div>
        </section>

    )
}

export default Header