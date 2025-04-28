import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r  from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="rounded-lg text-black bg-white p-4 px-12 text-xl hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 rounded-lg text-white bg-gray-500 p-4 px-12 text-xl bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
