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