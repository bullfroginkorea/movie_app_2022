import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';
function Movie({title,year,summary,poster,genres}) {
    return (
        <div className='movie'>
            
        


            <img src={poster} alt={title} title={title}/>
            <div className='movie__data'>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <ul className='movie__genres'>
                    {genres.map((genre,index)=>{
                        return (
                        <li key={index} className='movie__genre'>
                            {genre}
                        </li>)
                    })}
                </ul>
                <p className='movie__summary'>{summary}</p>
            </div>
        </div>
    
    )
}

Movie.propTypes = {
    year:  PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    summary:  PropTypes.string.isRequired,
    poster:  PropTypes.string.isRequired,
    genres:PropTypes.string.isRequired,
};

export default Movie;
