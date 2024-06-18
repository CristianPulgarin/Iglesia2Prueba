import React from 'react'
import correo from '../img/correo.png'
import celular from '../img/celular.png'
import direccion from '../img/direccion.png'
import facebook from '../img/descarga.gif'
import instagram from '../img/instagram.gif'
import youtube from '../img/youtube.gif'
import './Footer.css'

const Footer = () => {
  return (
    <>
    
        
     <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">Iglesia Cristiana esperanza de vida</span>
        </div>
        <div class="media-icons">
          <a href="https://www.facebook.com/iglesiacristiana.esperanzavida?locale=es_LA" target='_blank' rel="noreferrer noopener"><img src={facebook} alt='facebook' className='icons'/></a>
          <a href="https://www.instagram.com/icev_rr_/" target='_blank' rel="noreferrer noopener"><img src={instagram} alt='instagram' class="icons"></img></a>
          <a href="https://www.youtube.com/@iglesperanzadevida" target='_blank' rel="noreferrer noopener"><img src={youtube} alt='youtube' class="icons"></img></a>
          
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Información</li>
          <div className='cont'>
          <img src={direccion} alt='direccion'/><li><p>Av. 80 #52B-19</p></li>
          </div>
          <div className='cont'>
          <img src={celular}  alt='correo'/><li><p>542121</p></li>
          </div>
          <div className='cont'>
          <img src={correo} alt='correo'/><li><p>iglesia@gmail.com</p></li>
          </div>
          
          
        </ul>
        <ul class="box">
          <li class="link_name">Servicios</li>
          <li><p>Martes 9:00 AM</p></li>
          <li><p>Miercoles 7:30 PM</p></li>
          <li><p>Viernes 7:30 PM</p></li>
          <li><p>Sabados 5:00 PM</p></li>
        </ul>
        <ul class="box">
          <li class="link_name">Ubicación</li>
          <li>
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9779393235103!2d-75.59885402519649!3d6.266631493722036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442914c2d06667%3A0xf1a1547d70ce381b!2zQXYuIDgwICM1MkItMTksIEZlcnJpbmksIE1lZGVsbMOtbiwgTGEgQW3DqXJpY2EsIE1lZGVsbMOtbiwgQW50aW9xdWlh!5e0!3m2!1ses!2sco!4v1718574525346!5m2!1ses!2sco"
      title='Google maps mapa'
      width="100%"
      height="180"
      className='ubi'
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe></li>
           </ul>
        
        
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2024 - Cristian Pulgarin</span>
        
      </div>
    </div>
  </footer>
    </>
  )
}

export {Footer}
