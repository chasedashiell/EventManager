import React from 'react'
import './index.css'

function App() {

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
      <div className='w-full max-w-md'>
        <h1 className='text-white text-3xl text-semibold pb-2'>Leaderboard</h1>
        <div className='flex flex-col gap-2'>
          {leaderboard.map(group => (
            <div className='w-full bg-slate-600 rounded-md p-2 flex items-center justify-between flex-row gap-2'>
              <div className='flex items-center gap-2'>
                <div className='rounded-full flex items-center justify-center h-12 w-12 p-2 bg-slate-700'>
                  <span className='text-white font-bold text-2xl'>{group.rank}</span>
                </div>
                <span className='text-white font-semibold text-lg'>Class of {group.name}</span>
              </div>
              <span className='text-white text-lg font-semibold'>{group.points} Points</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
