import { useParams } from "react-router";
import { MoviesService } from "../api/MoviesService";
import { useEffect, useState } from "react";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovie()
        console.log(movie)
    }, [])

    return (
        <>
            <h1>{movie.title}</h1>
            <article>
                {movie.overview}
            </article>
        </>
    )
};