
import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>

      <div className='w-[1170px] mx-auto'>
        <Header></Header>
        <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
