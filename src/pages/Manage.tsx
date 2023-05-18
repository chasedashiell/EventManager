import React, { useState } from 'react';
import Input from '../components/Input';
import classNames from 'classnames';
import Button from '../components/Button';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import Modal from '../components/Modal';

const Manage = () => {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)

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
    <>
      <Modal isOpen={open} setIsOpen={setOpen}>
        <h2 className='text-gray-100 text-xl text-semibold mb-4'>Add event</h2>
        <div className='flex flex-col gap-2'>
          <Input placeholder='Name' />
          <Input placeholder='Point Amount' />
          <Button>
            Add Event
          </Button>
        </div>
      </Modal>
      <div className='w-full h-screen flex justify-center px-2 items-center'>
        <section className='w-full max-w-md'>
          <div className='flex flex-row justify-between items-center pb-2'>
            <h1 className='text-gray-100 text-3xl text-semibold'>Manage Points</h1>
            <Button onClick={() => setOpen(true)} size={"square"}>
              <PlusIcon className='text-white h-6 w-6' />
            </Button>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-2 mb-4'>
              {events.map((event, index) => (
                <div key={index} onClick={() => setActive(index)} className={classNames('rounded-md border-2 flex flex-row items-center justify-between bg-slate-700 py-4 px-3 cursor-pointer', index == active ? 'border-red-500' : 'border-transparent')}>
                  <h1 className='text-xl text-gray-100 text-bold'>{event.name}</h1>
                  <span className='text-xl text-gray-100 text-bold'>{event.points} Points</span>
                </div>
              ))}
            </div>
            <div className='w-full flex gap-2'>
              <Input type='number' onChange={(e) => console.log(e.target.value)} placeholder='Student ID' />
              <Button size={'square'}>
                <ArrowRightIcon className='text-white h-6 w-6' />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Manage