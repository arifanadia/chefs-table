
import './App.css'

import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>

      <div className='md:w-[1170px] md:mx-auto mx-4' >
        <Header></Header>
        <Recipes></Recipes>
        
      </div>
    </>
  )
}

export default App
