import React from 'react'
import "./movieitem.css";
function MovieItems( {item}) {

    const baseurl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="card col-lg-3 moviecard">
        <img src={`${baseurl}${item.poster_path}`} className="img-fluid" alt="img" />
        <div className="card-body">
            <h3>rating: {item.vote_average}</h3>
        </div>
         <h1>{item.name}</h1>
         </div>
  )
}

export default MovieItems