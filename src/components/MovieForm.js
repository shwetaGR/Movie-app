import React,{useState} from 'react'
import { addMovie } from '../actions/MoviesAction'
import {useDispatch} from 'react-redux'

 const MovieForm=(props)=>{
     const [movieName,setMovieName]=useState('')
     const [ranking,setRanking]=useState('')
     
     const dispatch=useDispatch()

     const handleMovieChange=(e)=>{
         setMovieName(e.target.value)
     }
     const handleRankingChange=(e)=>{
         setRanking(e.target.value)
        //  console.log(ranking,'rank')
     }
     
     const handleSubmit=(e)=>{
         e.preventDefault()
         const movieData={
             id:Number(new Date()),
             movieName:movieName,
             ranking:Number(ranking)
         }
         console.log(movieData,'movieData')
         dispatch(addMovie(movieData))
         setMovieName('')
         setRanking('')
     }
     return(
         <div>
             <h2>Add Movie</h2>
             <form onSubmit={handleSubmit} >
                <input  type='text'  placeholder='Enter Movie name' 
                                    value={movieName} 
                                    onChange={handleMovieChange}/>
                                    <br/>
                <input type='text'   placeholder='IMDB Ranking' 
                                     value={ranking} 
                                     onChange={handleRankingChange}/>
                                     <br/>
                <input type='submit' value='Add'/>
             </form>
             </div>
     )
 }
 export default MovieForm