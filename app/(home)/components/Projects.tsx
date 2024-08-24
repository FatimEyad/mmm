import React from 'react'
import Title from './Title';
import Link from 'next/link'
import { cn } from '@/lib/utils';
import { SiReact,SiTailwindcss,SiNextdotjs,SiMui ,SiTypescript,SiHtml5,SiJavascript} from "react-icons/si";

import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
export default function Projects() {
    const projects=[
        {
            title:"E-commerce",
            tech:[SiReact,SiTypescript,SiTailwindcss],
            link:"https://shopping-bgds.onrender.com",
            conver:"/q.png",
            background:"bg-orange-500"
        },
        {
            title:"Portfolio",
            tech:[SiReact,SiNextdotjs,SiTypescript,SiTailwindcss],
            link:"https://www.amazon.de/-/en/ref=nav_logo",
            conver:"/e.png",
            background:"bg-indigo-500"
        },
        {
            title:"Portfolio",
            tech:[SiReact,SiTailwindcss],
            link:"https://portfolioo-j0fy.onrender.com/",
            conver:"/t.png",
            background:"bg-green-500"
        },
        {
            title:" Patient Management",
            tech:[SiReact,SiNextdotjs,SiTypescript,SiTailwindcss],
            link:"https://github.com/FatimEyad/Patienten-",
            conver:"/logo.png",
            background:"bg-green-500"
        },
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text="Project 🧠" className="flex flex-col items-center justify-center rotate-6"/>
        <div className="grid grid-col-1 sm:grid-cols-2 pt-20 gap-5">
            {projects.map((project,index)=>
            {
                return (
                <Link href={project.link} key={index}>
                    <div className={
                        cn("p-4 rounded-md ",project.background)
                    }>
                        <DirectionAwareHover imageUrl={project.conver} className='w-full space-y-5 cursor-pointer'>
                           <div className="space-y-3">
                           <h1 className='text-2xl font-bold'>{project.title}</h1>
                             <div className="flex items-center gap-5">
                                {project.tech.map((Icon,index)=>
                                {
                                    return <Icon key={index} className="w-8 h-8 "/>
                                })}
                             </div>
                           </div>
                        </DirectionAwareHover>
                    </div>
                </Link>)
            }
            )}

        </div>

    </div>
  )
}
