import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"

function MovieDetail() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();



  const baseurl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {

    const cooler = async () => {
      const cool = await axios.get(`https://api.themoviedb.org/3/movie/` + id + `?api_key=b3bf6c1deaf9eb5aa767b4098d9ea77e`);
      setDetail(cool.data);

    };

    cooler();
  }, [id]);

  console.log(detail);

  return (
    <>
      {!detail && <div className="load"> loading....</div>}
      {detail &&
        <>

          <div className="container-detail">
            <div className="img" data-aos="slide-right">
              <img src={`${baseurl}${detail.poster_path}`} alt="" />
            </div>
            <div className="detail">
              <h4 className="title" data-aos="slide-down" data-aos-delay="200">{detail.original_title}</h4>
              <p className="under-title" data-aos="slide-down">
                <span className="date">
                  {detail.release_date}({detail.production_countries[0].iso_3166_1})
                  <small>.</small></span>


                <span>{detail.genres[0].name}</span>

              </p>


              <i className="tagline">{detail.tagline}</i>
              <section className="overview">
                <h6 data-aos="slide-left">overview</h6>
                <p data-aos="slide-left" data-aos-delay="100">{detail.overview}</p>
              </section>

            </div>
          </div>
        </>
      }


    </>

  )
}

export default MovieDetail