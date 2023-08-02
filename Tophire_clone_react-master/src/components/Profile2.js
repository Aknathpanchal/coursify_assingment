import React from 'react'

function Profile2() {
  return (
    <div>
    <div className='flex justify-around mt-32'>

     {/* left section */}
     <div>
     <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Companies%20Compete.png' alt='/'/>
 </div>
    {/* right section */}
        <div>
          <div className='bg-blue-400 w-24 h-1.5 rounded-full mb-8'></div>
           <h1 className='text-4xl text-blue-400 font-bold'>Sit back while companies <br/>compete to hire you</h1>
           <div className='mt-24'>
            <p className='text-xl'>Don’t waste your time reaching out to companies or <br/>dealing with recruiters.</p>
           </div>
           <div className='mt-12'>
            <p className='text-xl'>‍💨 We fast-track your profile to hiring managers.</p>
           </div>
           <div className='mt-2'>
           <p className='text-xl'>‍🙆‍♂️ Get multiple interview requests with upfront salary <br/>offers within days.</p>
          </div>
        </div>
      
   
      </div>
</div>
  )
}

export default Profile2
