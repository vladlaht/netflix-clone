import React, {useEffect, useState} from 'react';
import baseUrl from "../api/baseUrl";
import {getMovieInfo, requests} from "../api/requests";
import Header from "../components/Header";

const HeaderContainer = () => {
    const [movie, setMovie] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const netflixShows = await baseUrl.get(requests.fetchNetflixOriginals);
            const random = Math.floor(Math.random() * (netflixShows.data.results.length - 1));
            const randomMovie = netflixShows.data.results[random];
            const randomMovieInfo = await baseUrl.get(getMovieInfo(randomMovie.id));
            setMovie(randomMovieInfo.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <Header movie={movie}/>
        </>
    );
};

export default HeaderContainer;
