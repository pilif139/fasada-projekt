import { points } from "$lib/pointsStore";
import { get } from "svelte/store";
import { questions } from "$lib/questions";
import { error } from "@sveltejs/kit";

export function load(){
    const currentPoints = get(points);
    for(let i=0; i<questions.length; i++){
        if(currentPoints.YourAnswers[i] === undefined){
            throw error(500 ,"You have not answered all questions");
        }
    }
}