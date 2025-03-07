import Moon from './icons/Moon'
const Header =()=>{
    return(
        <header className="container mx-auto px-4 pt-8" >  
            <div className="flex justify-between">
              <h1 className="text-center uppercase text-white text-3xl font-bold -tracking-normal" >ToDo</h1>
              <button><Moon fill="#fff"/></button>
            </div>                    
         </header>

    )
}
export default Header