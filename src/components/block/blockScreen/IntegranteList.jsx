import React from 'react';
import { integrantes } from '../../../data/integrantes';
import { IntegranteCard } from './IntegranteCard';
import './integranteList.css';
export const IntegranteList = () => {

    const integran = integrantes; 
    console.log(integran);
    
    return (
        <div className="content-integrantes" >
            <h2 className="title-integrantes" >Integrantes del Equipo</h2>
            <div className="List-conteiner" >
                {
                    integran.map( (dato)=>(
                        <IntegranteCard key={dato.id} {...dato} />
                    ))
                }
            </div>
        </div>

    )
}
