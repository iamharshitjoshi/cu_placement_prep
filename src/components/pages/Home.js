import React from 'react'
import bg from '../../images/bg.jpg'
import Card from '../layout/Card'
import student from '../../images/Studeent.jpg'


const Home = () => {
  return (
    <>
      <div className='mt-[4rem] w-full h-[480px] bg-opacity-60 object-cover relative bg-black'>
        <img className=' w-full  h-full absolute mix-blend-overlay' src={bg} alt='Background'></img>
        <div className='absolute mr-6 p-20 mt-16'>
          <h1 className=' text-6xl font-extrabold text-cyan-100 '>Chandigarh University</h1>
          <p className=' text-3xl w-2/3 text-cyan-100 mt-3'>Where you can Fuck your Life and Career at the Same time O YEAH!</p>

        </div>
      </div>
      <div className='container relative p-8 '>
        <div className='p-6'>
          <h1 className='text-6xl text-center font-extrabold pt-8'><span className='text-red-600'> Best</span> University in Punjab(INDIA)</h1>
          <p className='text-3xl text-center pt-6'>Ranked among Asia’s fastest growing universities, Chandigarh University has accomplished
            distinctive milestones in the field of higher education. </p>
        </div>
      </div>
      <div className='relative  bg-zinc-500 w-full py-4  pl-32 space-x-24 px-24'>
        <Card />
        <Card />
        <Card />
      </div>

      <div className=' text-white'>
        <div className=' w-full h-[480px]  object-cover relative bg-black'>
          <img className=' w-full  h-full absolute mix-blend-overlay' src={student} alt='Background'></img>
          <div className='absolute mr-6 p-20 mt-16 text-center'>
            <h1 className=' text-6xl font-extrabold text-cyan-100 '>Reviews</h1>
            <h2 className=' text-3xl w-2/3 text-cyan-100 mt-3'>Pacement Stories</h2>
            <h2>Haeshit Joshi</h2>
            <p>Chandigarh University delivers every opportunity you require to secure a good employment opportunity with your ideal company. Whether it's honing active soft skills through seminars, the opportunity to attend technical workshops, or any other assistance students need, Chandigarh University and the faculty of the department are always willing to assist in an extremely helpful manner. At the conclusion of each day, I found that this place is where dreams come true and where one embarks on a journey of self-discovery.</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
