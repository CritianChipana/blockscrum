import React from 'react';

import './home.css'

export const Home = () => {
    return (
        <div className="home-contenedor" >
            <div>
                <h1 className="home-title" >Proyecto Nutri & Fit</h1>
                <p className="home-descripcion" >
                En este blog llevaremos a cabo la presentación de nuestro proyecto paso a paso con la ayuda de la Guia de fundamentos Scrum.
                </p>
            </div>
            <div className="home-contenedor-img">
                <img className="home-img" src="https://i.pinimg.com/originals/b8/45/d2/b845d2eb1076ae871a4f2b9bc7737723.png" alt="Imagen de fondo"/>
                {/* <img className="home-img" src="https://i.pinimg.com/564x/95/f1/49/95f149c33d0ce994dc79e896ecb31bd9.jpg" alt="Imagen de fondo"/> */}
            </div>
        </div>
    )
}
