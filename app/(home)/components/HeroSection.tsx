import React from 'react'
import Link from 'next/link'
import { MovingBorderBtn } from '@/components/ui/moving-border'
import Title from './Title'
import Image from 'next/image'
import j from '../components/programmer-working-computer.png'
export default function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between
    animate-move-up
    '> 
        <div className="space-y-10 text-center lg:text-left">
            <h1 className='text-4xl lg:text-7xl font-bold'> 
                Nice to meet You 👋🏻
                <span className='underline underline-offset-8 decoration-green-500 '>{"I'm Fatima"}</span>
            </h1>
            <p className='md:w-96 text-lg text-gray-300'> 
                {"Innovative website designer and developer specializing in responsive, user-friendly design"}
            </p>
            <Link href={"jundi@gmail.com"} className='inline-block group'>
              <Title text="Contact Me📭"/>
            </Link>
        </div>
        <div className='relative'>
            <div className="w-72 h-72 space-y-3  relative ">
              <Image src={j} width={500} height={500}
              alt="photo"
              />
            <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
            </div>
            <div className="absolute bottom-3 sm:bottom-14 left-0 sm:left-10">

            <MovingBorderBtn className='p-4 ' borderRadius='0.5rem'>
                <p>🚀 Availlable for Work</p>
            </MovingBorderBtn>

            </div>
    </div>
    </div>

)}
