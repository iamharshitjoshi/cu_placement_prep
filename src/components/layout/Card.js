import React from 'react'

function Card() {
  return (
   <>
    <div className='Card border-red-600 inline-block relative p-4 bg-red-500 text-white w-64 h-44  shadow-2xl hover:ease-in duration-300 '>
          <h1 className='text-4xl text-center font-bold pt-7'>Student</h1>
          <p className='text-3xl text-center pt-3'>45000+</p>
    </div>
   </>
  )
}

export default Card