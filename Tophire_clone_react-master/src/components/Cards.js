import React from 'react'

function Cards() {
  return (
    <div className='flex items-center justify-around mt-20'>
   {/* card 1 */}   
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div className=' text-center mt-4 flex items-center justify-center'>
    <div className='hover:border-2 border-[#071952] rounded-full'>
    <img className="rounded-full w-16 h-16 hover:border-4 hover:border-white" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" alt="" />
    </div>
</div>
<div className="p-5 text-center">
    <a href="/">
        <h5 class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white tracking-wide ">STEP 1: COMPLETE PROFILE</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Once you are approved, we showcase you to leading Indian technology startups</p>

</div>
</div>

       {/* card 2 */}
       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <div className=' text-center mt-4 flex items-center justify-center'>
           <div className='hover:border-2 border-[#071952] rounded-full'>
           <img className="rounded-full w-16 h-16 hover:border-4 hover:border-white" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" alt="" />
           </div>
       </div>
       <div className="p-5 text-center">
           <a href="/">
               <h5 class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white tracking-wide ">STEP 2: RECEIVE JOB OFFERS</h5>
           </a>
           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Companies start sending interview requests. Talk to only the ones you like.</p>
       
       </div>
       </div>
       {/* card 3 */}
   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div className=' text-center mt-4 flex items-center justify-center'>
    <div className='hover:border-2 border-[#071952] rounded-full'>
    <img className="rounded-full w-16 h-16 hover:border-4 hover:border-white" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" alt="" />
    </div>
</div>
<div className="p-5 text-center">
    <a href="/">
        <h5 class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white tracking-wide ">STEP 3: ACCEPT DREAM JOB</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Compare your offers and accept the best one. Hired!</p>

</div>
</div>

    </div>
  )
}

export default Cards
