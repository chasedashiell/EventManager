import React, { useState } from 'react';
import classNames from '../helpers/classNames';
import Input from '../components/Input';

const Manage = () => {
  const [active, setActive] = useState(0)

  const events = [
    {
      "name": "Football Game",
      "points": 2
    },
    {
      "name": "Football Game",
      "points": 2
    },
    {
      "name": "Football Game",
      "points": 2
    },
    {
      "name": "Football Game",
      "points": 2
    }
  ]

  return (
    <div className='w-full h-screen flex justify-center px-2 items-center'>
      <div className='w-full max-w-lg'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-2 mb-4'>
            {events.map((event, index) => (
              <div key={index} onClick={() => setActive(index)} className={classNames('rounded-md border-2 flex flex-row items-center justify-between bg-slate-700 py-4 px-3 cursor-pointer', index == active ? 'border-red-500' : 'border-transparent')}>
                <h1 className='text-xl text-gray-100 text-bold'>{event.name}</h1>
                <span className='text-xl text-gray-100 text-bold'>{event.points} Points</span>
              </div>
            ))}
          </div>
          <Input type='number' onChange={(e) => console.log(e.target.value)} placeholder='Student ID' />
        </div>
      </div>
    </div>
  )
}

export default Manage