import React from "react";
import Header from "./Header";

import useNowPlayingList from "../hooks/useNowPlayingList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingList();

  return (
    <div>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
