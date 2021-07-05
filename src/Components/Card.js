import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col bg-white mx-auto w-96 rounded-2xl shadow-xl h-96'>
      <div className='bg-cover bg-img bg-no-repeat w-96 h-40 rounded-t-2xl absolute z-1' />
      <div className='bg-white p-2 rounded-full relative z-50 mx-auto mt-24'>
        <img
          className='rounded-full bg-white bg-cover bg-no-repeat'
          src='./src/images/image-victor.jpg'
        />
      </div>
      <div className='h-24 border-bottom text-center pt-4'>
        <span className='font-bold text-lg card-text-color1'>
          Victor Crest{' '}
          <span className='card-text-color2 font-normal text-lg ml-1'>26</span>
        </span>
        <br />
        <span className='card-text-color2 font-normal text-sm'>London</span>
      </div>
      <div className='flex space-x-16 space-y-0.5 flex-row content-center justify-center text-center pt-4'>
        <span className='font-bold text-lg card-text-color1'>80K<br /><span className='card-text-color2 font-normal text-xxs'>Followers</span></span>
        <span className='font-bold text-lg card-text-color1'>803K<br /><span className='card-text-color2 font-normal text-xxs'>Likes</span></span>
        <span className='font-bold text-lg card-text-color1'>1.4K<br /><span className='card-text-color2 font-normal text-xxs'>Photos</span></span>
      </div>
    </div>
  )
}

export default Card
