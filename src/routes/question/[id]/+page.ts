import { questions } from '$lib/questions';
import { error } from '@sveltejs/kit';

export function load({params}){
    const id = Number(params.id);
    const PageQuestions = questions.filter(q => q.pageId === id);
    if(!PageQuestions.length){
        return error(404, 'Question not found');
    }
    return {
        Questions: PageQuestions,
        id: id,
    };
}