import axios from "axios";

export default class FakeYoutubeClient {
  contructor() {}

  async search({ params }) {
    const { relatedToVideoId } = params;
    return relatedToVideoId
      ? axios.get(`/videos/related.json`)
      : axios.get(`/videos/search.json`);
  }

  async videos() {
    return axios.get(`/videos/popular.json`);
  }

  async channels() {
    return axios.get(`/videos/channel.json`);
  }
}
