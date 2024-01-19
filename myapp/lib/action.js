'use server'
import Workout from "@/models/Workout"
import db from "./db"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import getServerUser from "./getServerUser";
import Exercise from "@/models/Exercise";

export const addWorkout = async (formData) => {
    const userId = await getServerUser(authOptions)
    console.log("Action UserID " + userId)
    const userEmail = userId.email
    console.log("UserId Email " + userEmail)
    const { title } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newWorkout = new Workout({
            title,
            creator:  userId.email 
        })
        await newWorkout.save()
    } catch (error) {
        throw new Error("Failed to create workout! " + error);
    }
    revalidatePath("/dashboard");
    redirect("/dashboard");

}

export const addExercise = async (formData) => {
    const userId = await getServerUser(authOptions)
    const userEmail = userId.email
    console.log("UserId Email " + userEmail)
    const { name, date, duration, distance, calories, notes, workoutId } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newExercise = new Exercise({
            name, date, duration, distance, calories, notes, workoutId
        })
        await newExercise.save()
    } catch (error) {
        throw new Error("Failed to create exercise! " + error);

    }
    revalidatePath("/dashboard");
    redirect("/dashboard");
}