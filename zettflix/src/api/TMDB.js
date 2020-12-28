import axios from "axios";

const TMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

const getMoviesByTerm = (SearchTerm, setMovies) => {
    TMDB.get("/search/movie/", {
        params: {
            api_key: "10bda2dedcc99bf1bb4b8e135cf195e8",
            query: SearchTerm,
        },
    }).then((response) => {
        setMovies(response.data.results);
    });
};

export { getMoviesByTerm };