import React, { forwardRef} from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp} from '@material-ui/icons'

const VideoCard = forwardRef(({movie}, ref) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    return (
        <div ref={ref} className="videoCard">
        <img src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" />
        <div className="movie_description">
        <TextTruncate 
         style={{marginTop: '10px'}}
         line={1}
         element="h6"
         truncateText="..."
         text={movie.overview}
        />
        {/* <p></p> */}
        <h3>{movie.title || movie.original_name}</h3>
        <p className="movie_stats">
            {movie.media_type && `${movie.media_type}`}
            {movie.release_date || movie.first_air_date} {" "}
            <ThumbUpSharp /> {" "}
            {movie.vote_count}</p>
        </div>
        </div>
    )
});

export default VideoCard
