import React from 'react'
import bg from '../../images/bg.jpg'
import Card from '../layout/Card'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



const Home = () => {
  return (
    <>
      <div className='mt-[4rem] w-full h-96 bg-opacity-60 object-cover relative bg-black'>
      <img  className=' w-full  h-full absolute mix-blend-overlay' src={bg} alt='Background'></img>
        <div className='absolute mr-10 p-20 mt-16'>
        <h1 className=' text-5xl font-extrabold text-cyan-100 '>Chandigarh University</h1>
        <p className=' text-3xl text-cyan-100'>Where you can Fuck your Life and Career at the Same time O YEAH!</p>

        </div>
      </div>
      <div className='container relative p-8 '>
        <div className='p-6'>
          <h1 className='text-6xl text-center font-extrabold pt-8'><span className='text-red-600'> Best</span> University in Punjab(INDIA)</h1>
          <p className='text-3xl text-center pt-6'>Ranked among Asia’s fastest growing universities, Chandigarh University has accomplished
            distinctive milestones in the field of higher education. </p>
        </div>
      </div>
      <div className='flex justify-center relative  bg-zinc-500 w-full py-4  pl-32 space-x-24 px-24'>
        <Card />
        <Card />
        <Card />
      </div>

     
      <AwesomeSlider className='h-[500px] bg-white'>
        <div className='h-3/6 absolute mr-6 flex justify-center flex-col items-center bg-white'>
          <h1 className='text-6xl font-extrabold text-yellow-400'>Reviews</h1>
            <h2 className='text-3xl w-2/3 text-cyan-100 text-center'>Placement Stories</h2>
          <h2>Harshit Joshi</h2>
          <p className='w-2/3 text-center '>Chandigarh University delivers every opportunity you require to secure a good employment opportunity with your ideal company. Whether it's honing active soft skills through seminars, the opportunity to attend technical workshops, or any other assistance students need, Chandigarh University and the faculty of the department are always willing to assist in an extremely helpful manner. At the conclusion of each day, I found that this place is where dreams come true and where one embarks on a journey of self-discovery.</p>
        </div>
        <div className='h-3/6 absolute mr-6 flex justify-center flex-col items-center '>
          <h1 className='text-6xl font-extrabold text-yellow-400'>Reviews</h1>
            <h2 className='text-3xl w-2/3 text-cyan-100 text-center'>Placement Stories</h2>
          <h2>Harshit Joshi</h2>
          <p className='w-2/3 '>Chandigarh University delivers every opportunity you require to secure a good employment opportunity with your ideal company. Whether it's honing active soft skills through seminars, the opportunity to attend technical workshops, or any other assistance students need, Chandigarh University and the faculty of the department are always willing to assist in an extremely helpful manner. At the conclusion of each day, I found that this place is where dreams come true and where one embarks on a journey of self-discovery.</p>
        </div>
        <div className='h-3/6 absolute mr-6 flex justify-center flex-col items-center '>
          <h1 className='text-6xl font-extrabold text-yellow-400'>Reviews</h1>
            <h2 className='text-3xl w-2/3 text-cyan-100 text-center'>Placement Stories</h2>
          <h2>Harshit Joshi</h2>
          <p className='w-2/3 '>Chandigarh University delivers every opportunity you require to secure a good employment opportunity with your ideal company. Whether it's honing active soft skills through seminars, the opportunity to attend technical workshops, or any other assistance students need, Chandigarh University and the faculty of the department are always willing to assist in an extremely helpful manner. At the conclusion of each day, I found that this place is where dreams come true and where one embarks on a journey of self-discovery.</p>
        </div>
        

      </AwesomeSlider>
    

    </>
  )
}

export default Home
