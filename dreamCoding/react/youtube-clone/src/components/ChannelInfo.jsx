import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(["channel", id], () => youtube.channelImageURL(id));
  return (
    <div>
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
