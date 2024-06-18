import React from 'react'
import { Footer } from '../Footer'
import { Cajas } from './Cajas'
import './inicio.css'
import { Diezmos } from './Diezmos'
import Nav from '../Nav'
import { Fotos } from './Fotos'
const Inicio = () => {
  return (
    <>
        <Nav/>
        <div className='header'>
          <br/>

          <img alt="fondo" className='im' src='https://iglesiacristianaesperanzadevida.wordpress.com/wp-content/uploads/2018/04/logo-esperanza-de-vida.png'/>
        
        <h1 className='titulo'>IGLESIA CRISTIANA ESPERANZA DE VIDA</h1>
        
        <h2 className='subtitulo'>Reconciliación y restauración</h2>

        <br/>
        
        </div>

        <Cajas/>
        <Diezmos/>
        <Fotos/>

      


      <Footer/>
    </>
    
  )
}

export {Inicio}
