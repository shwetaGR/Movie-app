import React,{useState,useEffect} from 'react'
import MoviesList from './MoviesList'
import MovieForm from './MovieForm'
import {useSelector} from 'react-redux'
import MoviesStats from './MoviesStats'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const MoviesContainer=(props)=>{
    const [moviesStore,setMoviesStore]=useState([])
    const [search,setSearch]=useState('')
    const [dropDown,setDropDown] =useState('')


    const movies=useSelector((state)=>{
        return state.movies
    })
    
    useEffect(()=>{
        setMoviesStore(movies)
    },[movies])     //incase not use this  'not shown data'  so use bcz  
                    //moviesStore called movies ,movies data has to be call 

    useEffect(()=>{
        handleFilterSearch(search)
    },[search])
                
    useEffect(()=>{
        handleSelect(dropDown)
    },[dropDown])
                    
                    
    const handleSearchInput=(e)=>{
        const searchInput=e.target.value
        setSearch(searchInput)
    }

    const handleFilterSearch=(name)=>{
        const filteredName=movies.filter((ele)=>{
            return ele.movieName.toLowerCase().includes(name.toLowerCase())
        })
            setMoviesStore(filteredName)
    }

   
    const handleDropDownChange=(e)=>{
        setDropDown(e.target.value)
    }

    const handleSelect=(name)=>{
      const result1=[...movies].sort((a,b)=>a.movieName.localeCompare(b.movieName))

      const result2=[...movies].sort((a,b)=>a.ranking - b.ranking)   
    
    if(name==='a-z'){
        setMoviesStore(result1)
    }else if(name==='z-a'){
        setMoviesStore(result1.reverse())
    }

    if(name==='0-1'){
        setMoviesStore(result2)
    }else if(name==='1-0'){
        setMoviesStore(result2.reverse())
    }
    if(!name){
        setMoviesStore(movies)
    }
    
}
    return(
        <div  >
            
            <form >
            <input type="text"  value={search} onChange={handleSearchInput} 
                               placeholder='search by name...' />
            
            
            <select  value={dropDown} onChange={handleDropDownChange}>
                <option  value=''>order by</option>
                <option  value="a-z">a-z</option>
                <option  value='z-a'>z-a</option>
                <option  value='0-1'>0-1</option>
                <option  value='1-0'>1-0</option>
                </select>
            </form>
            
                <div className='row'>
                <div className="col-mb-3 mt-4" >
                    <MoviesList moviesStore={moviesStore}/>
                    <div className="col-mb-3 mt-4">
                    <MovieForm/>
                    </div>
                    <div className="col-mb-3 mt-4">
                    <MoviesStats moviesStore={moviesStore}/>
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default MoviesContainer