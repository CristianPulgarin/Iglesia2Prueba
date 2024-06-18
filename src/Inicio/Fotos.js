import React from 'react'
import './Fotos.css'
import imagen2 from '../img/img2.png'
import imagen3 from '../img/imagen3.png'
import imagen4 from '../img/imagen4.png'
import imagen5 from '../img/imagen5.png'
import imagen6 from '../img/imagen6.png'
import { NavLink } from 'react-router-dom'
const Fotos = () => {
    
  return (
    <div>
      <div id="simple_gallery">
      <a name="servicios" >
                
                    <h2 class="titulofot">Ministerios</h2>
                    <br/>
                </a>
  <ul>
    <NavLink to='/imagenes'
    target='_blank'
    >
<li><p className='nomin'>Alabanza</p><img src={imagen2} /></li>
    </NavLink>
        
        
    <li><p className='nomin'>Maestras</p><img src={imagen3} /></li>
    <li><p className='nomin'>Varones</p><img src={imagen4} /></li>
    <li><p className='nomin'>Mujeres</p><img src={imagen5} /></li>
    <li><p className='nomin'>Oración</p><img src={imagen6} /></li>
  </ul>
  <div class="clear"></div>
</div>



    </div>
  )
}

export {Fotos}
