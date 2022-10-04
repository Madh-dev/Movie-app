import React from 'react'
import "./movieitem.css";
import {Link} from "react-router-dom"
function MovieItems( {item}) {

    const baseurl = "https://image.tmdb.org/t/p/w500/";
  
  return (
    <div className="card col-lg-3 moviecard" key={item.id}>
        <img src={`${baseurl}${item.poster_path}`} className="img-fluid" alt="img" />
        <div className="card-body">
            <h3>rating: {item.vote_average}</h3>
        </div>
         <h1>{item.title}</h1>
         <Link to={`/${item.id}`} className="detail-link">Detail</Link>
         </div>
  )
}

export default MovieItems