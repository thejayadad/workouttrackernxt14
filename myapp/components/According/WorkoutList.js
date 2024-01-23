  'use client'
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { getWorkouts, getExercises } from '@/lib/data';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedWorkouts = await getWorkouts();
        const workoutsWithExercisesPromises = fetchedWorkouts.map(async (workout) => {
          const exercises = await getExercises(workout._id);
          return {
            _id: workout._id,
            title: workout.title,
            exercises,
          };
        });

        const resolvedWorkoutsWithExercises = await Promise.all(workoutsWithExercisesPromises);
        setWorkouts(resolvedWorkoutsWithExercises);
      } catch (error) {
        console.error("Error fetching data:", error);
        setWorkouts([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Accordion variant="splitted" className="mb-4">
        {workouts.map((workout) => (
          <AccordionItem key={workout._id} title={workout.title}>
            {/* Nested Accordion for Exercises */}
            <Accordion variant="splitted" className="mb-2">
              {workout.exercises.map((exercise) => (
                <AccordionItem key={exercise._id} title={exercise.name}>
                  {/* Example content for Exercise AccordionItem */}
                  <div>
                    <p>Exercise Name: {exercise.name}</p>
                    <p>Exercise Duration: {exercise.duration}</p>
                    {/* Add more exercise details as needed */}
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WorkoutList;






  {/* <Accordion variant="splitted" className="mb-4">
  <AccordionItem key={id} title={title}>
    
  </AccordionItem>


  </Accordion> */}