"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiReact,SiNextdotjs,SiCss3 ,SiTypescript,SiHtml5,SiJavascript} from "react-icons/si";

export default function Skills() {
  const skills=[
    {
      text:"react",
      Icon:SiReact
    },
    {
      text:"Next js",
      Icon:SiNextdotjs
    },
    {
      text:"js",
      Icon:SiJavascript
    },
    {
      text:"taypscript",
      Icon:SiTypescript
    },
    {
      text:"html",
      Icon:SiHtml5
    },
    {
      text:"css",
      Icon:SiCss3
    },
  ]
  return (
    <div className='max-w-5xl mx-auto px-8' >
        <Title text="Skills 🤓" className="flex flex-col items-center justify-center -rotate-6"/>
        <HoverEffect items={skills}/>
    </div>
  )
}
