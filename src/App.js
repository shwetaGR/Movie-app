import React from 'react'
import MoviesContainer from './components/MoviesContainer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App =(props)=>{
  return(
    <div className="container">
      <h1 className=' mb-4 mt-3'> My Big Movie List</h1>
      
         <MoviesContainer/>
       </div>
  )
}
export default App