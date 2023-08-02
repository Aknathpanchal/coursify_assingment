import React from 'react'

function Video() {
  return (
    <div className='mt-40'>
        <div className='text-center'>
        <h1 className='text-4xl font-bold'>Techies 💘 TopHire</h1>
        </div>
        <div className='text-center mt-8'>
         <p className='text-xl font-medium'>A better love story than twilight. Check the video below to find out why.</p>
        </div>

        <div className='mt-12'>
            <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://player.vimeo.com/external/538561643.sd.mp4?s=52af2e19cc1ca2c21bac8476a6bff75c2c839f05&profile_id=165&oauth2_token_id=57447761" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Video
