import React,{useState, useEffect} from 'react';
import Card from '../componentes/card';


const Home = () => {
    const [data, setData] = useState(null)
   useEffect(()=>{
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=7ed4c29228fd7733596637079919c3ba&language=en-US"
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        setData(data.results)
        console.log(data.results)
    })
   },[])

    return (
        <div>
          {data != null ? 
            data.map((pelicula)=>{
                console.log(pelicula)
                return(
                    <Card 
                    src={pelicula.poster_path}
                    titulo={pelicula.title}
                    descripcion={pelicula.overview}
                    />
                )
            })  
            : null
            }
        </div>
    );
}

export default Home;
