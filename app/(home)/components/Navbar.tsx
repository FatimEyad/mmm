import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

import Link from 'next/link'
import { cn } from '@/lib/utils';
export default function Navbar({className}:{className?:string}) {
    const socials =[
        {
            link: 'https://www.linkedin.com/in/fatima-hamed-245a36259/',
            label:'Linkedin',
            Icon:SiLinkedin,
            
        },
        {
            link: 'https://github.com/FatimaAlhamed-code',
            label:'Github',
            Icon:SiGithub,
        },
    ]
  return (
    <div>
        <nav className={cn('py-10 flex justify-between items-center animate-move-down',className)}>
            <h1
            className='text-2xl font-bold underline underline-offset-8
             decoration-green-500 -rotate-2'>Fatima 👩🏻‍💻</h1>
            <div className="flex items-center gap-5">
                {socials.map((social,index)=>{  
                    
                    const Icon = social.Icon;
                    return (
                    <Link href={social.link} aria-label={social.label} key={index} >
                        <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                   </Link>)
                })}
            </div>
        </nav>
    </div>
  )
}
