import React from "react";
import Movie from "./MovieCard";

const MovieList = (props) => {
    console.log(props.movies);
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {props.movies.map((movie, i) => {
                        return <Movie data={movie} key={i} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default MovieList;