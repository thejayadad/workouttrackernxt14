'use client'
// 'use client'
import React, { useState, useEffect } from 'react';
import { getExercises, getWorkouts } from '@/lib/data';
import According from '@/components/According/According';

const WorkoutList =  () => {
    const [workoutsWithExercises, setWorkoutsWithExercises] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const workouts = await getWorkouts();
          const workoutsWithExercisesPromises = workouts.map(async (workout) => {
            const exercises = await getExercises(workout.id);
            return {
              _id: workout._id.toString(),
              title: workout.title,
              exercises,
            };
          });
  
          const resolvedWorkoutsWithExercises = await Promise.all(workoutsWithExercisesPromises);
          setWorkoutsWithExercises(resolvedWorkoutsWithExercises);
        } catch (error) {
          console.error("Error fetching data:", error);
          setWorkoutsWithExercises([]);
        }
      };
  
      fetchData();
    }, []);
  
    console.log("Workouts with Exercises: ", workoutsWithExercises);
    
    return (
      <div>   
          {
              workoutsWithExercises.map((workout) => (
                  <According title={workout.title} key={workout._id} exercises={workout.exercises} />
              ))
          }
      </div>
    );
}

export default WorkoutList;
