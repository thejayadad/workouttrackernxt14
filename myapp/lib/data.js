'use server'
import Exercise from "@/models/Exercise"
import db from "./db"
import Workout from "@/models/Workout"

export const getWorkouts = async () => {
    try {
        db.connect()
        const workouts = await Workout.find({})
        return workouts
    } catch (error) {
        throw new Error("Failed to fetch contacts! " + error);
    
    }
}

export const getWorkout = async (id) => {
    try {
        db.connect()
        const workout = await Workout.findById(id)
        return workout
    } catch (error) {
        throw new Error("Failed to get contact! " + error);
    
    }
}

export const getExercises = async (workoutId) => {
    try {
        db.connect()

      const exercises = await Exercise.find( { workoutId: workoutId})
  
      console.log("Exercises: ", exercises);  
      return exercises;
    } catch (error) {
      throw new Error("Failed to fetch exercises! " + error);
    }
  };