import React from 'react';
import {BiPlay} from 'react-icons/bi';
import {IMAGE_URL} from "../constants";
import {capitalizeFirstLetter, getYear, truncate} from "../utils/StringUpdates";

const Header = ({movie}) => {

    return (
        <div className="banner" style={{
            backgroundImage: `url(${IMAGE_URL}${movie?.backdrop_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            {movie &&
            <div className="banner__vertical-mask">
                <div className="banner__horizontal-mask">
                    <div className="banner__title">{movie?.name || movie?.original_name}</div>
                    <div className="banner__info">
                        <div className="banner__info-votes"> {movie?.vote_average} </div>
                        <div className="banner__info-year"> {getYear(movie?.first_air_date)} </div>
                        <div className="banner__info-seasons">
                            {movie?.number_of_seasons} Season{movie?.number_of_seasons !== 1 ? "s" : ""}
                        </div>
                    </div>
                    <div className="banner__description">
                        {truncate(movie?.overview, 450)}
                    </div>
                    <div className="banner__buttons">
                        <button className="banner__buttons-button play-button"><BiPlay/> Play</button>
                        <button className="banner__buttons-button my-list-button"> + My list</button>
                    </div>
                    <div className=" banner__genres">
                        <span style={{fontWeight: 500}}>Genres</span>: {movie?.genres.map((genre, index) => (
                            <span
                                key={genre.id}> {capitalizeFirstLetter(genre.name)}{index < movie?.genres.length - 1 ? ',' : ''} </span>
                        )
                    )}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Header;
