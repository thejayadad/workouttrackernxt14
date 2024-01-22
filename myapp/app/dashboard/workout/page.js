'use client'
import { getExercises, getWorkouts } from '@/lib/data';
import React, { useEffect, useState } from 'react';

const WorkoutPage = () => {
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

  return (
    <div>
      {workoutsWithExercises.map(({ _id, title, exercises }) => (
        <div key={_id}>
          <span>{title}</span>
          {exercises.map((exercise) => (
            <div key={exercise._id}>
              <span>{exercise.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkoutPage;
