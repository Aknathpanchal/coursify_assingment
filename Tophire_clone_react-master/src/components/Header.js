import React from 'react'

function Header() {
  return (
    <div>
       <div className='text-center mt-[10px] mb-[37px]'>
           <h1 className='text-[45px] font-bold'>Find your next top tech job in 1 week.</h1>
           </div>
           <div className='text-center text-[21px]'>
           <p> <span className='font-semibold bg-[#F0DE36]'>Are you a top 2%</span> Software Engineer, Product Manager or Data Scientist?</p>
           </div>
           <div className='text-center text-[21px]'>
           <p>Let leading Indian technology<span className='font-semibold bg-[#F0DE36]'>companies compete to hire you.</span></p>
           </div>
           {/* button */}

           <div className='text-center mt-8'>
             <button className=' font-bold bg-[#3288e3] text-white text-[15px] border-2 border-[#3288e3] rounded-lg outline-none px-[40px] py-4'>APPLY TO JOIN</button>
           </div>

           <div className='text-center mt-2'>
            <p>100% free. It takes only 5 minutes</p>
           </div>
    </div>
  )
}

export default Header
