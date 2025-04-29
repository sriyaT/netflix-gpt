import React from "react";
import Header from "./Header";

import useNowPlayingList from "../hooks/useNowPlayingList";
import usePopularPlayingList from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedList from "../hooks/useTopRatedList";
import useUpcomingMovieList from "../hooks/useUpcomingMoviesList";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingList();
  usePopularPlayingList();
  useTopRatedList();
  useUpcomingMovieList();

  return (
    <div>
      <Header></Header>
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
