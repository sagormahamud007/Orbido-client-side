import React from 'react';
import logo from '../../asstes/NavbarLogo/logo.png'
import {FaInstagram,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
       <div>
         <div className='grid lg:grid-cols-4 mt-16 md:grid-cols-2 sm:grid-cols-2
          lg:mx-36 text-white'>
            
                <div >
                    <div className='flex items-center'><img src={logo}></img> 
                    <h2>OR<span className='text-yellow-600'>BIDO</span></h2></div>
                    <p className='font-normal text-base	text-slate-300'>A new way to make the payments <br/> easy, reliable and secure.</p>
                </div>
            
            <div>
                <h3 className='mb-2'>Usefull Links</h3>
                <ul className='text-xs font-normal'>
                    <li className='mb-4 hover:bg-black-300 w-14 py-1'>Content</li>
                    <li className='mb-4'>How it Works</li>
                    <li className='mb-4'>Create</li>
                    <li className='mb-4'>Explore</li>
                    <li className='mb-4'>Terms & Services</li>
                </ul>
            </div>
            <div>
            <h3 className='mb-2'>Community</h3>
                <ul className='text-xs font-normal'>
                    <li className='mb-4'>Help Center</li>
                    <li className='mb-4'>Partners</li>
                    <li className='mb-4'>Suggestions</li>
                    <li className='mb-4'>Blog</li>
                    <li className='mb-4'>Newsletters</li>
                </ul>
            </div>
            <div>
            <h3 className='mb-2'>Partner</h3>
                <ul className='text-xs font-normal'>
                    <li className='mb-4'>Our Partner</li>
                    <li className='mb-4'>Become a Partner</li>
                </ul>
            </div>
        </div>
        <hr className='mt-5 mb-3 w-10/12 m-auto bg-slate-400'></hr>
       <div className='lg:flex justify-between lg:mx-28 text-center'>
       <p className='text-white mb-3'>Copyright @ 2023 Orbido. All Rights Reserved. </p>
    <div className='text-white flex mb-4'>
    <Link to={"https://www.instagram.com/"}><FaInstagram className='mr-5'/></Link>
  
    <Link to={"https://web.facebook.com"}><FaFacebook className='mr-5'></FaFacebook></Link>
    <Link to={" https://twitter.com/"}><FaTwitter className='mr-5'></FaTwitter></Link>
    <Link to={"https://www.linkedin.com/"}><FaLinkedin className='mr-5'></FaLinkedin></Link>
</div>
       </div>
       </div>
    );
};

export default Footer;