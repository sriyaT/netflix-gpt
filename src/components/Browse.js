import React from "react";
import Header from "./Header";

import useNowPlayingList from "../hooks/useNowPlayingList";
import usePopularPlayingList from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedList from "../hooks/useTopRatedList";
import useUpcomingMovieList from "../hooks/useUpcomingMoviesList";

const Browse = () => {
  useNowPlayingList();
  usePopularPlayingList();
  useTopRatedList();
  useUpcomingMovieList();

  return (
    <div>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
