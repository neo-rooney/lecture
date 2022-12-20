import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 6 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error : {error} </p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
