import React from 'react'
import bg from '../../images/bg.jpg'


const Companies = () => {
  return (
    <>
      <div className='h-24 w-full mt-[4rem] bg-black'>
        <img className='absolute w-full h-2/3' src={bg} alt="" />
        <div className=' absolute w-full h-1/2  '>
          <h1 className='text text-5xl mt-8'>Welcome to Chandigarh University</h1>
          <p className='text-3xl
          '>Get your life a better purpose to become an engineer as soon as possible</p>
        </div>
      </div>
    </>
  )
}

export default Companies
