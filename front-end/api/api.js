//Fetch ou Axios
import "dotenv/config";
import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = "http://localhost:3000/api";
const URL = "https://spotify-react-6thd.onrender.com/api";

const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;
