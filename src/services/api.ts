import axios from 'axios';

const KEY = 'AIzaSyAXpvu2A_NCMgvS3HMpZrIrwyydytsUCHU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
    type: 'channel',
  },
  headers: {},
});
