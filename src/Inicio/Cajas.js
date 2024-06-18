import React from 'react'
import './Cajas.css'

import imagen2 from '../img/img2.png'
import imagen3 from '../img/imagen3.png'
import imagen4 from '../img/imagen4.png'
import imagen5 from '../img/imagen5.png'
import imagen6 from '../img/imagen6.png'
import wpp from '../img/wpp.png'
const Cajas = () => {
  return (
    <>
     <div class="contenedor">
                <a name="servicios" >
                <br/><br/>
                    <h2 class="tituloser">NUESTROS SERVICIOS</h2>
                    <br/>
                </a>

                <div class="galeria-port">
                    <div align="center" class="imagen-port">
                        <img alt='img2' src={imagen2} height="900" width="1100"/>
                        <div class="hover-galeria">

                           
                            <h2>Quieres saber más?</h2>
                            <p>Escribenos</p>



                            <a href="https://api.whatsapp.com/send?phone=+51987654321" rel="noreferrer" target="_blank">
                                
                                    <img alt='logowpp' className='logos' src={wpp}/>
                            </a>


                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={imagen3} alt='im3' height="800" width="1100"/>
                        <div class="hover-galeria">
                            <h2>Quieres saber más?</h2>
                            <p>Escribenos</p>



                            <a href="https://api.whatsapp.com/send?phone=+51987654321" rel="noreferrer" target="_blank">
                                
                                    <img alt='logowpp' className='logos' src={wpp}/>
                            </a>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={imagen4} alt='im4' height="800" width="1100"/>
                        <div class="hover-galeria">
                            <h2>Quieres saber más?</h2>
                            <p>Escribenos</p>



                            <a href="https://api.whatsapp.com/send?phone=+51987654321" rel="noreferrer" target="_blank">
                                
                                    <img alt='logowpp' className='logos' src={wpp}/>
                            </a>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img alt='im5' src={imagen5}/>
                        <div class="hover-galeria">

                            <h2>Quieres saber más?</h2>
                            <p>Escribenos</p>



                            <a href="https://api.whatsapp.com/send?phone=+51987654321" rel="noreferrer" target="_blank">
                                
                                    <img alt='logowpp' className='logos' src={wpp}/>
                            </a>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={imagen6} alt='im6' height="800" width="1100"/>
                        <div class="hover-galeria">


                            <h2>Quieres saber más?</h2>
                            <p>Escribenos</p>



                            <a href="https://api.whatsapp.com/send?phone=+51987654321" rel="noreferrer" target="_blank">
                                
                                    <img alt='logowpp' className='logos' src={wpp}/>
                            </a>
                        </div>
                    </div>



                </div>

            </div>
            
    </>
  )
}

export {Cajas}
