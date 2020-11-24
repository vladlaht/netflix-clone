import React from 'react';

import {IMAGE_URL} from "../constants";
import {capitalizeFirstLetter} from "../untils/StringUpdates";

const Header = ({movie}) => {
    console.log("movie", movie);
    return (
        <section className="banner" style={{
            backgroundImage: `url(${IMAGE_URL}${movie.backdrop_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>

            <div className="banner__vertical-mask">
                <div className="banner__horizontal-mask">
                    <div className="banner__name">{movie?.name || movie?.original_name}</div>
                    <div className="banner__info">
                        <div className="banner__info-votes">{movie.vote_average}</div>
                        <div className="banner__info-year">{movie.first_air_date}</div>
                        <div
                            className="banner__info-seasons">{movie.number_of_seasons} Season{movie.number_of_seasons !== 1 ? "s" : ""}</div>
                    </div>
                    <div className="banner__description">
                        {movie.overview}
                    </div>
                    <div className="banner__buttons">
                        <button>Play</button>
                        <button>My list</button>
                    </div>
                    <div className="banner__genres">
                        {movie.genres.map(genre => (
                                <span key={genre.id}> {capitalizeFirstLetter(genre.name)} </span>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
