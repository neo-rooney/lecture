import { createContext, useContext } from "react";
import Youtube from "../api/yotubue";
import YouTubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

const client = new YouTubeClient(); //new YouTubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
