import "./App.css"
import News from './News'

function App(){
    return(
        <div className="container1">
        <p className='text'>
           Mais lidas
        </p>  
        <News />

        <div className='text'>
            Mais lidas
        </div>
        <News/>  

       </div>
   )
}
export default App;