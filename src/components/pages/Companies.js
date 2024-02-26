import React from 'react'
import bg from '../../images/bg.jpg'


const Companies = () => {
  return (
    <>
      <div className='mt-[4rem] w-full h-96 bg-opacity-60 object-cover relative bg-black'>
      <img  className=' w-full  h-full absolute mix-blend-overlay' src={bg} alt='Background'></img>
        <div className='absolute mr-10 p-20 mt-16'>
        <h1 className=' text-5xl font-extrabold text-cyan-100 '>Chandigarh University</h1>
        <p className=' text-3xl text-cyan-100'>Where you can Fuck your Life and Career at the Same time O YEAH!</p>

        </div> 
      </div>
   
    </>
  )
}

export default Companies
