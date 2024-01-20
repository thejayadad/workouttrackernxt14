import Aside from '@/components/Dashboard/Aside'
import TopNav from '@/components/Dashboard/TopNav'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="h-full rounded-lg">
        <TopNav />
        <div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
        <Aside />
        </div>
        <main className="md:pl-20 pt-16 h-full">
        {children}
      </main>
    </div>
  )
}

export default layout