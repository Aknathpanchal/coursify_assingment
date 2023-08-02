import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-around px-4 py-8 '>
        {/* Logo */}
         <div className='logo'>
                <img className='h-7' src='https://d383au3bye3rv1.cloudfront.net/static/images/logo/main.png' alt='logo' />     
         </div>
           {/* Links */}

           <div>
               <ul className='flex items-center justify-between cursor-pointer'>
                  <li className='text-lg font-bold ml-8 text-[#438fde]'>FOR EMPLOYERS</li>
                  <li className='text-lg font-bold ml-8 text-[#438fde]'>REFER AND EARN</li>
                  <li className='text-lg font-bold ml-8 text-[#438fde]'>LOGIN</li>
                  <li className='text-lg font-bold ml-8 text-[#438fde]'>SIGN UP</li>
               </ul>
           </div>
    </div>
  )
}

export default Navbar
