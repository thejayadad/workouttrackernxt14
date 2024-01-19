import { addExercise } from '@/lib/action';
import { getExercises, getWorkout } from '@/lib/data';
import React from 'react'

const WorkoutPage = async ({params}) => {
    const { id } = params;
    const workout = await getWorkout(id)
    const exercises = await getExercises(id)
  return (
    <section className='px-4 py-8'>
        <h2 className='text-center'>{workout.title}</h2>
        <form
        className='flex flex-col'
        action={addExercise}
        >
            <input
                name='name'
                placeholder='Name...'
            />
                <input type='hidden' name='workoutId' defaultValue={workout._id.toString()} />
            <input
            type='date'
                name='date'
                placeholder='Date....'
            />
                <input
                type='number'
                name='duration'
                placeholder='Duration....'
            />
                <input
                type='number'
                name='distance'
                placeholder='Distance...'
            />
                <input
                type='number'
                name='calories'
                placeholder='Calories....'
            />
                <textarea
                name='notes'
                placeholder='Notes...'
            />
            <button type='submit'>Add Exercise</button>
        </form>

        <h2 className='text-center'>All Exercises</h2>
        {
            exercises.map((exercise) => (
                <div key={exercise.id}>
                    <span>{exercise.name}</span>
                </div>
            ))
        }
    </section>
  )
}

export default WorkoutPage