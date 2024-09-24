import { error } from '@sveltejs/kit';
import { contents } from '$lib/content';

export function load({params}){
    const id = Number(params.id);
    const content = contents[id];
    if(!content){
        return error(404, 'Content not found');
    }
    return {
        content: content,
        id: id,
    };
}