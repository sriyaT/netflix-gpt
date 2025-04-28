import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        { movieId } +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data?.json();

    const trailerVideo = json?.results?.filter((item) => {
      return item?.type === "Trailer" && item?.name === "Official Trailer";
    });
    const trailer = trailerVideo?.length
      ? trailerVideo
      : json?.results && json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};

export default useTrailerVideo;
