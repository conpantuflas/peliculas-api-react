import React from 'react';

const Card = (props) => {
    const {src, titulo, descripcion} = props
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={`https://image.tmdb.org/t/p/w200${src}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{descripcion}</p>
                        <a href="#" className="btn btn-primary">Go</a>
                    </div>
            </div>
        </div>
    );
}

export default Card;
