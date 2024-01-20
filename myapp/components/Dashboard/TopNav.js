'use client'
import Link from 'next/link'
import React from 'react'

const TopNav = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10">
     <div className="flex items-center">
     <Link href="/">
          <h1 className={("hidden md:block text-xl md:text-3xl font-bold text-primary")}>
            TheFitnessForge
          </h1>
        </Link>

     </div>
        
    </div>
  )
}

export default TopNav