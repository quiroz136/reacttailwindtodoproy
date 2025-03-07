const TodoFilter = () => {
    return(
        <section className="mx-auto container ">
            <div className='bg-white mt-8 p-4 flex justify-center gap-4 rounded-md'> 
              <button className='text-blue-600'>All</button>
              <button className='hover:text-blue-600'>Active</button>
              <button className='hover:text-blue-600'>Completed</button>
            </div>            
          </section>
    )
}
export default TodoFilter