import React from 'react'

function Profile() {
  return (
      <div>
          <div className='text-center font-bold text-xl mt-28'>
            <h1>HOW IT WORKS</h1>
          </div>
          <div className='flex justify-around mt-16'>
          {/* left section */}
              <div>
                <div className='bg-blue-400 w-24 h-1.5 rounded-full mb-8'></div>
                 <h1 className='text-4xl text-blue-400 font-bold'>Create your free candidate <br/>profile</h1>
                 <div className='mt-24'>
                  <p className='text-xl'>Answer a few questions about yourself - it takes less <br/>than 5 minutes</p>
                 </div>
                 <div className='mt-12'>
                  <p className='text-xl'>‍🏅 What is your biggest achievement?</p>
                 </div>
                 <div className='mt-2'>
                 <p className='text-xl'>‍👑️ What does your ideal opportunity look like?</p>
                </div>
              </div>
            
          {/* right section */}
            <div>
                <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Create%20Profile.png' alt='/'/>
            </div>
            </div>
      </div>
  )
}

export default Profile
