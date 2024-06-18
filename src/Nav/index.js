

import './Nav.css'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import { Diezmos } from '../Inicio/Diezmos';


const navigation = [
    { name: 'Inicio', href: '/', current: false },
    { name: 'Servicios', href: '/servicios', current: false },
    { name: 'Diezmos', href: '/donaciones', current: false },
    { name: 'Ministerios', href: '/ministerios', current: false },
    { name: 'Devocionales', href: '/devocionales', current: false },
    { name: '¿Quienes somos?', href: '/somos', current: false },
  ]
  
  
  export default function Nav() {

    const scrollToPosition = () => {
      window.scrollTo({
        top: 1750,
        behavior: 'smooth', // Desplazamiento suave
      });
    };

    const scrollToPosition2 = () => {
      window.scrollTo({
        top: 400,
        behavior: 'smooth', // Desplazamiento suave
      });
    };

    const scrollToPosition3 = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Desplazamiento suave
      });
    };

    const scrollToPosition4 = () => {
      window.scrollTo({
        top: 2550,
        behavior: 'smooth', // Desplazamiento suave
      });
    };
  
   
  
    return (
      <Disclosure as="nav" className="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8">
              <div className="relative flex h-20 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex">

                      {navigation.map((item) => (
                        <NavLink
                          to={item.href}
                          key={item.name}
                          onClick={()=>{
                            if(item.name==='Diezmos'){
                              scrollToPosition();
                            }
                            else{
                              if(item.name==='Servicios'){
                                scrollToPosition2();
                              }
                              else{
                                if(item.name==='Ministerios'){
                                  scrollToPosition4();
                                }
                                
                              else{
                                scrollToPosition3();
                              }
                              }
                            }
                          }
                          }
                          className="caja"
                        >
                          <div className="texto text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-2xl font-semibold uppercase">
                            {item.name}
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
              </div>
            </div>
  
            <DisclosurePanel className="sm:hidden">
              <div className="pb-3 grid place-items-center">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    onClick={()=>{
                      if(item.name==='Diezmos'){
                        scrollToPosition();
                      }
                      else{
                        if(item.name==='Servicios'){
                          scrollToPosition2();
                        }
                        else{
                          scrollToPosition3();
                        }
                      }
                    }
                    }
                    href={item.href}
                    className="text-white hover:bg-white mx-auto hover:text-black block rounded-md px-3 py-2 text-3xl font-bold"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    )
  }


  export {Nav}