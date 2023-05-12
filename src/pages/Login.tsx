import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center px-2 items-center'>
      <section className='w-full max-w-md'>
        <div className='flex flex-col gap-3 items-center'>
          <h1 className='text-5xl font-bold text-white mb-3'>Login</h1>
          <Input placeholder='Username' />
          <Input placeholder='Password' />
          <Button className='w-full' size='normal'>Login</Button>
        </div>
      </section>
    </div>
  )
}

export default Login