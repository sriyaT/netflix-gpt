import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularPlayingList = () => {
  const dispatch = useDispatch();
  const getPopularPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    getPopularPlayingMovies();
  }, []);
};

export default usePopularPlayingList;
