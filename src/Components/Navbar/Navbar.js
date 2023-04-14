import React, { useState } from 'react';
import Link from './Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../asstes/NavbarLogo/logo.png'

const Navbar = () => {
  const [open,setOpen]=useState(false)


  const routes=[
    {id:1, name:"Home", path:"/"},
    {id:2, name:"About", path:"/aboutUs"},
    {id:3, name:"Features", path:"/features"},
    {id:4, name:"Solution", path:"/solution"}
  ]
  return (
    <nav className='text-white mx-2'>
    <div onClick={()=>setOpen(!open)} className="h-8 w-8 md:hidden ml-2">
    {
        open ? 
        <XMarkIcon className='mt-4' />:<Bars3Icon  className='mt-4'/>
      }
    </div>
      <ul className={`md:flex w-full  justify-end absolute md:static duration-500 ease-in ${open ? 'top-8': "top-[-150px]"}`}>
{
  routes.map(route=><Link 
  route={route}
  key={route.id}
  ></Link>)
}
      </ul>
      <div className='flex items-center  mt-[-30px]'>
      <img  className='ml-12' src={logo}></img>
      <h2 className=''>OR<span className='text-yellow-500 '>BIDO</span></h2>
      </div>
    </nav>
  );
};

export default Navbar;