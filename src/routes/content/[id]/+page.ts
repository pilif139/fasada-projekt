import { error, redirect } from '@sveltejs/kit';
import { contents } from '$lib/content';

export function load({params}){
    const id = Number(params.id);
    const content = contents[id];
    console.log(contents.length);
    console.log(id)
    if(id === contents.length){
        redirect(301,'/summary');
    }
    if(!content){
        return error(404, 'Content not found');
    }
    return {
        content: content,
        id: id,
    };
}