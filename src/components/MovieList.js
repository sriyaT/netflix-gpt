import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="px-12 bg-black text-white">
      <h1 className="text-2xl py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return (
              <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
