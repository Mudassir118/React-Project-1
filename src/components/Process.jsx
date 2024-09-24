import React from 'react'
import FoodCard from './FoodCard';

const Process = ({cards,heading}) => {
  return (
    <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-7">
    <div className="w-[32%] flex flex-col items-center justify-center">
      <h1 className="font-bold text-center text-3xl">
   {heading}
      </h1>

    </div>
    <div className="w-full h-1/2 flex flex-row justify-between ">
      <div className="w-[70%] mx-auto h-full flex flex-row  justify-around">
        {cards.map((item, index) => {
          return <div className='w-48 h-max'>
            <h1 className='text-3xl font-bold text-[#ff5331]'>{item.index}</h1>
            <FoodCard icon={item.icon} name={item.name} key={index}/>
          </div>;
        })}
      </div>
 
    </div>

  </div>
  )
}

export default Process