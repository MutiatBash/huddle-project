import React from 'react'
import {Link} from "react-router-dom"
// import Logo from '../assets/svg/logo_white.svg'

const Footer = () => {
  return (
    <div className='w-full h-full px-14 py-8 bg-gray-900'>
        <div className='border border-t-[#C6C9CF] w-full mb-10'></div>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            {/* <img src={Logo} alt="" /> */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                <div>
                <Link className='text-white font-medium text-lg' to="/">Home</Link>
                </div>
                <div>
                <Link className='text-white font-medium text-lg'to="/information">Information</Link>
                </div>
                <div>
                <Link className='text-white font-medium text-lg' to="/shop">Shop</Link>
                </div>
                <div>
                <Link className='text-white font-medium text-lg' to="/terms-of-service">Terms of Service</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer