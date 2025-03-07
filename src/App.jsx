import Cruz from './components/icons/Cruz.jsx'
import Moon from './components/icons/Moon.jsx'

function App() { 
  return (
    <>    
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
          <header className="container mx-auto px-4 pt-8" >  
            <div className="flex justify-between">
              <h1 className="text-center uppercase text-white text-3xl font-bold -tracking-normal" >ToDo</h1>
              <button><Moon fill="#fff"/></button>
            </div>
                    
          </header>
          <main className="container mx-auto  mt-8 px-4"> 
          <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8" >
            <span className="rounded-full border-2 w-5 h-5 inline-block border-gray-300"></span>
            <input type="text" placeholder="ingrese tarea..." className="w-full text-gray-400 outline-none" />
          </form>
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
            <section className="py-4 px-4 flex justify-between bg-white rounded-b-md" >
              <span className="text-gray-400">5 items left</span>
              <button className="text-gray-400">Clear Completed</button>
            </section>
            
          </main>
          <section className="mx-auto container px-4 ">
            <div className='bg-white mt-8 p-4 flex justify-center gap-4 rounded-md'> 
              <button className='text-blue-600'>All</button>
              <button className='hover:text-blue-600'>Active</button>
              <button className='hover:text-blue-600'>Completed</button>
            </div>            
          </section>
          <p className="text-center mt-8">Drag and Drop</p>
        </div>
      
      
    </>
  )
}

export default App
