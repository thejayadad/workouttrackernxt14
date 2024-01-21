import { getWorkouts } from '@/lib/data'
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import According from '@/components/According/According';


const WorkoutPage = async () => {
  const workouts = await getWorkouts()

  return (
    <section className='px-4 py-8'>

      
      {
        workouts.map((workout) => (
          <div className='text-grey grid grid-cols-1 md:grid-cols-2' key={workout.id}>
            <According title={workout.title} id={workout.id} />
          </div>
        ))

      }
    </section>
  )
}

export default WorkoutPage 