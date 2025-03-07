const TodoCreate =()=>{
    return(
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8" >
            <span className="rounded-full border-2 w-5 h-5 inline-block border-gray-300"></span>
            <input type="text" placeholder="ingrese tarea..." className="w-full text-gray-400 outline-none" />
        </form>
    )
}
export default TodoCreate