import Cruz from "./icons/Cruz"

const ToDolist =()=>{
    return(
        <div className="bg-white rounded-t-md mt-8"> 
              <article className="flex gap-4 px-4 py-4 border-b-gray-400 border-b">
                <button className="rounded-full border-2 w-5 h-5 inline-block border-gray-300"></button>
                <p className="text-gray-600 grow">Completar online tarea</p>
                <button> <Cruz/></button>
              </article>
              <article className="flex gap-4 px-4 py-4 border-b-gray-400 border-b">
                <button className="rounded-full border-2 w-5 h-5 inline-block border-gray-300"></button>
                <p className="text-gray-600 grow">Completar online tarea</p>
                <button> <Cruz/></button>
              </article>
              <article className="flex gap-4 px-4 py-4 border-b-gray-400 border-b">
                <button className="rounded-full border-2 w-5 h-5 inline-block border-gray-300"></button>
                <p className="text-gray-600 grow">Completar online tarea</p>
                <button> <Cruz/></button>
              </article>            
            </div>
    )
}
export default ToDolist