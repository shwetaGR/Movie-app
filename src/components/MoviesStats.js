import React from 'react'
// import {useSelector} from 'react-redux'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const MoviesStats=(props)=>{
    const{moviesStore}=props
    

    const sorted=[...moviesStore].sort((b,a)=>a.ranking-b.ranking)
    // console.log(sorted,'sorted')
    return(
        <div className='' >
            <div className="card border-success mb-3" style={{width: '18rem'}}>
            <div className="card-header bg-transparent border-success"><h3>Movie Stats</h3></div>
                <div className="card-body text-success">
                    <h5 className="card-title">Total movies - {moviesStore.length}</h5>
    <p className="card-text"># Top Ranked Movie {sorted.length>0 && `- ${sorted[0].movieName}`}</p>
  </div>
</div>
            {/* <h2>Total movies - {moviesStore.length} </h2> */}
            {/* <p># Top Ranked Movie {sorted.length>0 && `- ${sorted[0].movieName}`}</p> */}
        </div>
    )
}
export default MoviesStats