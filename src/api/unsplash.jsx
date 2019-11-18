import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 31e0534d249626c536e205b7c73f2fa04bca1850f1505585aa754f0b85d3a079"
  }
});
