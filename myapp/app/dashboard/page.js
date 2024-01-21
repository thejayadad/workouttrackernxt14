import SearchForm from '@/components/Forms/SearchForm'
import { addWorkout } from '@/lib/action'
import { getWorkouts } from '@/lib/data'
import getServerUser from '@/lib/getServerUser'
import Link from 'next/link'
import React from 'react'

const DashboardPage = async () => {
    const workouts = await getWorkouts()
    const user = await getServerUser()
    const email = user.email
    console.log("User " + email)
  return (
    <section className='px-4 py-8'>
        <div className='bg-orange grid grid-cols-1 gap-4 md:grid-cols-2 '>
        <div className='p-8 py-24 md:py-36 text-center border-grey/10 border rounded-xl flex flex-col gap-2  hover:bg-grey transform transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-2'>
        <div className='hover:text-primary'>
        <p className='text-grey text-2xl hover:text-primary flex flex-col'>
            <span>1</span>
            Total Workouts</p>
        </div>
        </div>



            <div className='p-8 py-24 text-center border-grey border rounded-lg'>1</div>
            <div className='p-8 py-24 text-center border-grey border rounded-lg'>1</div>
            <div className='p-8 py-24 text-center border-grey border rounded-lg'>1</div>
        </div>
        <h2>New Workout</h2>
        <form
        action={addWorkout}
        >
            <input
            type='text'
            name='title'
            placeholder='Title...'
            />
            <button type='submit'>Create Workout</button>
        </form>
        <div className='flex flex-col gap-4'>
        {
            workouts.map((workout) => (
                <div key={workout.id}>
                    <Link href={`/dashboard/workout/${workout.id}`}>
                       { workout.title}
                    </Link>
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default DashboardPage