import axios from 'axios';

const KEY = 'AIzaSyATNamZkHub43-xCt6ukJfi4IXhT_V87ec';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
