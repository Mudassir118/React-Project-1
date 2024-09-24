import React from 'react'

const FoodCard = ({icon,name}) => {
  return (
    <div className='bg-[#FAFAFA] px-7 flex flex-col items-center gap-4 py-10 rounded-2xl'>
        <div className='w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-2xl '>
            <h1 className='text-4xl'>{icon}</h1>
        </div>
        <h3 className='text-xl font-bold text-center'>{name}</h3>
    </div>
  )
}

export default FoodCard