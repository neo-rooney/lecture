import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail(props) {
  const { videoId } = useParams();
  return <div>VideoDetail : {videoId}</div>;
}
