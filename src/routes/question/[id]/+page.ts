import { contents } from "$lib/content.js";
import { questions } from "$lib/questions";
import { error, redirect } from "@sveltejs/kit";

export function load({ params }) {
  const id = Number(params.id);
  const PageQuestions = questions.filter((q) => q.pageId === id);

  if (PageQuestions.length) {
    return {
      Questions: PageQuestions,
      id: id,
    };
  }
  
  if(id === contents.length){
    return redirect(301,'/summary');
  }

  if (!PageQuestions.length &&  contents[id + 1] !== undefined) {
    return redirect(301, "/content/" + (id + 1));
  } else if(id + 1 === contents.length){
    return redirect(301, "/summary");
  }
   else{
    return error(404, "Not questions found");
  }
}
