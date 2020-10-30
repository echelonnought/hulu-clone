import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from 'axios';
import FlipMove from 'react-flip-move';

function Results({selectedOption}) {
    const url = 'https://api.themoviedb.org/3';
    const [movies, setMovies] = useState([ ])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${url}${selectedOption}`)
            setMovies(request.data.results)
            console.log(request);
            return request;
        }

        fetchData();
    }, [selectedOption])
    return (
        <div className="results">
            <FlipMove>
            {movies.map(movie => {
               return <VideoCard key = {movie.id} movie={movie} />
            })}
            </FlipMove>
            
        </div>
    )
}

export default Results
