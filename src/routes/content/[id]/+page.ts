import { error, redirect } from '@sveltejs/kit';
import { contents } from '$lib/content';

export function load({params}){
    const id = Number(params.id);
    const content = contents[id];

    if(id === contents.length){
        return redirect(301,'/summary');
    }
    if(!content){
        return error(404, 'Content not found');
    }
    return {
        Content: content,
        id: id,
    };
}