import { questions } from '$lib/questions';
import { error } from '@sveltejs/kit';

export function load({params}){
    const id = Number(params.id);
    const question = questions[id];
    if(!question){
        return error(404, 'Question not found');
    }
    return {
        question: question,
        id: id,
    };
}