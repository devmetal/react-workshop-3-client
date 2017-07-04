import axios from 'axios';

const headers = { 'Content-Type': 'application/graphql' };

export default query => axios.post('/graphql', {}, { headers, params: { query } })
  .then(resp => resp.data);
