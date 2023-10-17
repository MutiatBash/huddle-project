import React from 'react'
// import Logo from '../assets/svg/logo_white.svg'

const Footer = () => {
  return (
    <div className='w-full h-full px-14 py-8 bg-gray-900'>
        <div className='border border-t-[#C6C9CF] w-full mb-10'></div>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            {/* <img src={Logo} alt="" /> */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                <div>
                <a className='text-white font-medium text-lg' href="/">Home</a>
                </div>
                <div>
                <a className='text-white font-medium text-lg' href="/information">Information</a>
                </div>
                <div>
                <a className='text-white font-medium text-lg' href="/shop">Shop</a>
                </div>
                <div>
                <a className='text-white font-medium text-lg' href="/terms-of-service">Terms of Service</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer