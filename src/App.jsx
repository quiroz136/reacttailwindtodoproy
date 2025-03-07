
import Header from './components/Header.jsx'
import TodoComputed from './components/TodoComputed.jsx'
import TodoCreate from './components/TodoCreate.jsx'
import TodoFilter from './components/TodoFilter.jsx'
import ToDolist from './components/ToDolist.jsx'

function App() { 
  return (
    <>    
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
          <Header/>
          <main className="container mx-auto  mt-8 px-4"> 
            
            <TodoCreate/>
            <ToDolist/>
            <TodoComputed/>
            <TodoFilter/>   
          
          </main>
          <p className="text-center mt-8">Drag and Drop</p>
        </div>
      
      
    </>
  )
}

export default App
