
 import { getExercises, getWorkouts } from '@/lib/data'
  import React from 'react'
  import {Accordion, AccordionItem} from "@nextui-org/react";
  import According from '@/components/According/According';
import Exercise from '@/components/According/Exercise';
import WorkoutList from '@/components/According/WorkoutList';


  const WorkoutPage = async () => {
    const workouts = await getWorkouts()
    return (
      <section className='px-4 py-8'>
        <div>
      <WorkoutList />

 {/* {workouts.map(async (workout) => {
const exercises = await getExercises(workout.id);
   return (
       <div className='text-grey grid grid-cols-1 md:grid-cols-2'>
        
        <span>{workout.title}</span>
        {
          exercises.map((exercise) => (
            <div key={exercise.id}>
              <span>{exercise.name}</span>
            </div>
          ))
        }
       </div>
     );
   })}  */}
           </div>
      </section>
    )
  }

  export default WorkoutPage 


  // {workouts.map(async (workout) => {
  //   const exercises = await getExercises(workout.id);
  //   return (
  //     <div className='text-grey grid grid-cols-1 md:grid-cols-2'>
  //       <According  key={workout.id} title={workout.title} id={workout.id} exercises={exercises} />
  //     </div>
  //   );
  // })}