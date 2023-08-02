import React from 'react'

function Reviews() {
  return (
    <div className='mt-16 flex items-center justify-around'>
  {/* first card */}     
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div>
   <img className='h-8' src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/cred.png?123' alt='/'/>
  </div>
   <div className='flex mt-6 items-center justify-start'>
    <img className='h-12 rounded-full' src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/yadhu_manoharan.jpg?123' alt='/' />
      <div className='ml-4'>
       <p className='font-bold text-lg'>
       Yadhu Manoharan</p>
       <span className='text-md'>Sr Android Engineer</span>
      </div>
    
    </div>
<p className="mb-3 mt-3 font-normal">TopHire was able to make the process really easy. They were able to schedule interviews with the best companies in the industry and drove the entire process smoothly.</p>
</div>
    {/* second card */}     
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div>
 <img className='h-8' src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/dream11.png?123' alt='/'/>
</div>
 <div className='flex mt-6 items-center justify-start'>
  <img className='h-12 rounded-full' src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/santosh_nain.jpeg?123' alt='/' />
    <div className='ml-4'>
     <p className='font-bold text-lg'>
     
Santosh Nain</p>
     <span className='text-md'>SDE-2</span>
    </div>
  
  </div>
<p className="mb-3 mt-3 font-normal">A friend of mine told me about TopHire when I started looking for new opportunities. The TopHire team was extremely helpful, professional and quick with everything.</p>
</div>
 {/* third card */}     
 <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <div>
  <img className='h-8' src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/curefit.png?123' alt='/'/>
 </div>
  <div className='flex mt-6 items-center justify-start'>
   <img className='h-12 rounded-full' src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/tarun_dugar.jpeg?123' alt='/' />
     <div className='ml-4'>
      <p className='font-bold text-lg'>
     
Tarun Dugar</p>
      <span className='text-md'>Sr Software Engineer</span>
     </div>
   
   </div>
 <p className="mb-3 mt-3 font-normal">Compared to other job portals, what stood out for me was that TopHire, on top of providing really good opportunities, helped me in negotiations with the companies too.</p>
 </div>
    </div>
  )
}

export default Reviews
