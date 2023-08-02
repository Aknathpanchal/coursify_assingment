import React from 'react'

function Profile3() {
  return (
    <div>
        
          <div className='flex justify-around mt-32'>
          {/* left section */}
              <div>
                <div className='bg-blue-400 w-24 h-1.5 rounded-full mb-8'></div>
                 <h1 className='text-4xl text-blue-400 font-bold'>Salary & Role transparency</h1>
                 <div className='mt-24'>
                  <p className='text-xl'>Interview requests from companies mention salary and <br/>role details upfront - before you decide to accept or <br/>decline them.</p>
                 </div>
              </div>
            
          {/* right section */}
            <div>
                <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Transparency.png' alt='/'/>
            </div>
            </div>
      </div>
  )
}

export default Profile3
