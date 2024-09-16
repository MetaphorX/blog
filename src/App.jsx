import {Routes, Route} from 'react-router-dom'
import { Samples } from './pages'
import MaleShoe from './pages/MaleShoe'
import FemaleShoe from './pages/FemaleShoe'
import Dress from './pages/Dress'
import MaleFashion from './pages/MaleFashion'
import Others from './pages/Others'
import Kids from './pages/Kids'

function App() {


  return (
    <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={ <Samples />}/>
          <Route path="/male-shoes" element={ <MaleShoe />}/>
          <Route path="/female-shoes" element={ <FemaleShoe />}/>
          <Route path="/dresses" element={ <Dress />}/>
          <Route path="/male-fashion" element={ <MaleFashion />}/>
          <Route path="/others" element={ <Others />}/>
          <Route path="/kids" element={ <Kids />}/>
        </Routes>
    </>
  )
}

export default App
