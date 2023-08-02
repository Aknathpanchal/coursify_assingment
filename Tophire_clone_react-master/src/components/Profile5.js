import React from 'react'

function Profile5() {
  return (
    <div>
        
    <div className='flex justify-around mt-36'>
    {/* left section */}
        <div>
          <div className='bg-blue-400 w-24 h-1.5 rounded-full mb-8'></div>
           <h1 className='text-4xl text-blue-400 font-bold'>Current and past employers <br/> can’t see your profile</h1>
           <div className='mt-24'>
            <p className='text-xl'>By default, we hide your profile from any employers that <br/>you list as your current and past employer.</p>
           </div>
           <div className='mt-12'>
           <p className='text-xl'>‍🕵 Privacy Assured</p>
          </div>
        </div>
      
    {/* right section */}
      <div>
          <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Privacy.png' alt='/'/>
      </div>
      </div>
</div>
  )
}

export default Profile5
