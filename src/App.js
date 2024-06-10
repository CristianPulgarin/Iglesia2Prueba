
import './App.css';
import correo from './img/correo.png'
import celular from './img/celular.png'
import direccion from './img/direccion.png'
import facebook from './img/descarga.gif'
import instagram from './img/instagram.gif'
import youtube from './img/youtube.gif'

function App() {
  return (
    <>
      
      <div className='nav'>
        <li className='lista'>
            Inicio
        </li>
        <li className='lista'>
            Servicios
        </li>
        <li className='lista'>
            Diezmos
        </li>
        <li className='lista'>
            Devocionales
        </li>
        <li className='lista'>
            ¿Quienes somos?
        </li>
      </div>


      <section className='body'>

      sd

      </section>

      <footer className='footer'>
        <div className='tf'>
            <h2 className='titi'>Información</h2>
            <div className='cf'>
            <img clasname='imgs'   src={correo}  alt='s'/>
            <p className='texti'>iglesiaesperanzadevida@gmail.com</p>
            </div>
            <div className='cf'>
            <img clasname='imgs'  src={celular}  alt='s'/>
            <p className='texti'>5418450</p>
            </div>
            <div className='cf'>
            <img clasname='imgs'  src={direccion}  alt='s'/>
            <p className='texti'>Carrera 80 #52B-19 Medellin-Antioquia
            </p>
            </div>
        </div>
        <div className='tf'>
            <h2 className='titr'>Redes sociales</h2>
            <div className='cr'>
            <img  clasname='imgs' src={facebook}  alt='s'/>
            <p className='texti'>Facebook
            </p>
            </div>
            <div className='cr'>
            <img clasname='imgs'  src={instagram}  alt='s'/>
            <p className='texti'>Instagram
            </p>
            </div>
            <div className='cr'>
            <img clasname='imgs'  src={youtube}  alt='s'/>
            <p className='texti'>Youtube
            </p>
            </div>
        </div>
        <div className='tf'>
        <h2 className='titu'>Ubicación</h2>
        <div className='cu'>
        <iframe className='ub'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.873624908184
        1!2d-75.59629518538713!3d6.266623704380891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768
        !4f13.1!3m3!1m2!1s0x8e442914c2b12deb%3A0x1ca06fb5395b8888!2sIGLESIA%20CRIST
        IANA%20ESPERANZA%20DE%20VIDA!5e0!3m2!1ses!2sco!4v1657319140982!5m2!1ses!2sco"
        title="Google Map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
      </footer>

    </>
  );
}

export default App;
