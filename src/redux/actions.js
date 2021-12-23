import { nanoid } from "nanoid";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'



export const addFavorite = (task) => {
    console.log("adding")
    return{
    
        type : ADD_FAVORITE,
        todo: {
            id : nanoid(),
            task,
            complete:false
        }
    }}