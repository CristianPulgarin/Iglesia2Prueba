import React from 'react'
import diezmos from '../img/imagediezmos.png'
import './diezmos.css'
const Diezmos = () => {
    
  return (
    <>
      <a name="donaciones">
            <br/>
            <h2 class="titulodiez">DIEZMOS Y OFRENDAS</h2>
            <br/>
        </a>
        <div class="contenedor_donaciones">

            <div class="item">
                <div align="center"><img alt='diezmos' src={diezmos} class="diezmos" /></div>
            </div>
    </div>
    </>
  )
}

export {Diezmos}
