import React from 'react';
import getLeaderboard from '../api/requests/getLeaderboard';

const Leaderboard = () => {
  const { data: leaderboard } = getLeaderboard()
  console.log(leaderboard)
  
  return (
    <div className='w-full h-screen flex justify-center px-2 items-center'>
      <section className='w-full max-w-md'>
        <h1 className='text-gray-100 text-3xl text-semibold pb-2'>Leaderboard</h1>
        <div className='flex flex-col gap-2'>
          {leaderboard?.map((group, index) => (
            <div key={index} className='w-full bg-slate-600 rounded-md p-2 flex items-center justify-between flex-row gap-2'>
              <div className='flex items-center gap-2'>
                <div className='rounded-full flex items-center justify-center h-12 w-12 p-2 bg-slate-700'>
                  {/*
                    Need to sort these manually then use the index as a rank
                  */}
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