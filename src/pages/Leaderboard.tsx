import React from 'react';
import getLeaderboard from '../api/requests/getLeaderboard';

const Leaderboard = () => {
  const { data: leaderboard } = getLeaderboard()
  
  return (
    <div className='w-full h-screen flex justify-center px-2 items-center'>
      <section className='w-full max-w-md'>
        <h1 className='text-gray-100 text-3xl text-semibold pb-2'>Leaderboard</h1>
        <div className='flex flex-col gap-2'>
          {leaderboard?.sort((a,b) => b.points - a.points ).map((group, index) => (
            <div key={index} className='w-full bg-slate-600 rounded-md p-2 flex items-center justify-between flex-row gap-2'>
              <div className='flex items-center gap-2'>
                <div className='rounded-full flex items-center justify-center h-12 w-12 p-2 bg-slate-700'>
                  <span className='text-gray-100 font-bold text-2xl'>{index + 1}</span>
                </div>
                <span className='text-gray-100 font-semibold text-lg'>Class of {group.grade}</span>
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