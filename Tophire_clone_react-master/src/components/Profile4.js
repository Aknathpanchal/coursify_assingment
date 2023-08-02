import React from 'react'

function Profile4() {
  return (
    <div>
    <div className='flex justify-around mt-40'>

     {/* left section */}
     <div>
     <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Dedicated%20Talent%20Advocate.png' alt='/'/>
 </div>
    {/* right section */}
        <div>
          <div className='bg-blue-400 w-24 h-1.5 rounded-full mb-8'></div>
           <h1 className='text-4xl text-blue-400 font-bold'>A dedicated talent advocate</h1>
           <div className='mt-24'>
            <p className='text-xl'>Your Talent Advocate will guide you through the entire <br/>process. From polishing your profile, providing interview <br/> tips to helping negotiate offers!</p>
           </div>
        </div>
      
   
      </div>
</div>
  )
}

export default Profile4
