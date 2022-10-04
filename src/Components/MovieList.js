import React, {useEffect, useState} from 'react'
import MovieItems from './MovieItems';
import axios from "axios";
const MovieList =()=> {

    const [items, setItems] = useState([]);

    useEffect(() => {
     
    
        const key ="b3bf6c1deaf9eb5aa767b4098d9ea77e";

    const getmoviedata = async() =>{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
       setItems(res.data.results);
        console.log(res.data.results);
    };
    getmoviedata();
    
        

    }, []);


//    onClick={cooler()}
    return (
        <div>
            <div className="container">
                <div className="row">
                    {items.map((item) =>(
                        <MovieItems item = {item} />
                    ))}
                    

                </div>

            </div>


        </div>
    )
}

export default MovieList