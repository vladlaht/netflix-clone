import React, {useState, useEffect} from "react";
import baseUrl from "../api/baseUrl";
import {IMAGE_URL} from "../constants";

const CategoryRow = ({title, fetchUrl, netflixOriginals}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await baseUrl.get(fetchUrl);
            setMovies(request.data.results);
        };
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="category">
            <h2>{title}</h2>
            <div className="category__items">
                {movies.map(movie => (
                    <img className={`category__item ${netflixOriginals && "category__item-originals"}`}
                         key={movie.id}
                         src={`${IMAGE_URL}${netflixOriginals ? movie.poster_path : movie.backdrop_path}`}
                         alt={movie.name}/>
                ))}
            </div>
        </div>
    )
};

export default CategoryRow;