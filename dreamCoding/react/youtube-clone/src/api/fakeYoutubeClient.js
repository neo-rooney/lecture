import axios from "axios";

export default class FakeYoutubeClient {
  contructor() {}

  async search() {
    return axios.get(`/videos/search.json`);
  }

  async videos() {
    return axios.get(`/videos/popular.json`);
  }
}
