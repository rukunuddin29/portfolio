import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io5';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaJava } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa6';

function Tech() {
  return (
    <>
      <div className=' pb-4 lg:pb-10'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-500' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoNodejs className='text-7xl text-green-500' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoJavascript className='text-7xl text-yellow-400' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiTailwindCssFill className='text-7xl text-teal-400' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaJava className='text-7xl text-red-600' />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaBootstrap className='text-7xl text-purple-600' />
          </div>
      
        </div>
      </div>
    </>
  );
}

export default Tech;
