import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const [envioExitoso, setEnvioExitoso] = useState(false);
    const [errorEnvio, setErrorEnvio] = useState(false);
    const [enviando, setEnviando] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setEnviando(true);

        fetch('URL_DE_TU_SERVIDOR', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((result) => {
                console.log(result.text);
                setEnvioExitoso(true);
                setErrorEnvio(false);

            }, (error) => {
                console.log(error.text);
                setErrorEnvio(true);
                setEnvioExitoso(false);

                setTimeout(() => {
                    setErrorEnvio(false);
                }, 5000);
            })
            .finally(() => {
                setEnviando(false);
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    mensaje: ''
                });
            });
    };

    return (
        <div>
            {envioExitoso ? (
                <div className="alert alert-success mt-4 text-center">
                    ¡Mensaje enviado con éxito👌🏻!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <div className="form-group fw-light mb-3">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group fw-light mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group fw-light mb-3">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telefono"
                            name="user_phone"
                            value={formData.user_phone}
                            onChange={handleChange}
                            pattern="[0-9]*"
                            required
                        />
                    </div>
                    <div className="form-group fw-light mb-3">
                        <label htmlFor="mensaje">Mensaje (máx. 150 caracteres):</label>
                        <textarea
                            className="form-control"
                            id="mensaje"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            maxLength="150"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-sumit fw-light mt-3"
                        disabled={enviando}
                    >
                        {enviando ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            )}
            {errorEnvio && (
                <div className="alert alert-danger mt-4 text-center">
                    Hubo un Error, intenta mas tarde.
                </div>
            )}
        </div>
    );
};

export default Formulario;
