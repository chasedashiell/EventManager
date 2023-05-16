import React from 'react';

const Leaderboard = () => {

  const leaderboard = [
    {
      "rank": 1,
      "name": "2023",
      "points": 200
    },
    {
      "rank": 2,
      "name": "2024",
      "points": 200
    },
    {
      "rank": 3,
      "name": "2025",
      "points": 200
    },
    {
      "rank": 4,
      "name": "2026",
      "points": 200
    }
  ]

  return (
    <div className='w-full h-screen flex justify-center px-2 items-center'>
      <section className='w-full max-w-md'>
        <h1 className='text-gray-100 text-3xl text-semibold pb-2'>Leaderboard</h1>
        <div className='flex flex-col gap-2'>
          {leaderboard.map((group, index) => (
            <div key={index} className='w-full bg-slate-600 rounded-md p-2 flex items-center justify-between flex-row gap-2'>
              <div className='flex items-center gap-2'>
                <div className='rounded-full flex items-center justify-center h-12 w-12 p-2 bg-slate-700'>
                  <span className='text-gray-100 font-bold text-2xl'>{group.rank}</span>
                </div>
                <span className='text-gray-100 font-semibold text-lg'>Class of {group.name}</span>
              </div>
              <span className='text-gray-100 text-lg font-semibold'>{group.points} Points</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Leaderboard