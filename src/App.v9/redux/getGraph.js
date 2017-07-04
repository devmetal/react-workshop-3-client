import axios from 'axios';

const headers = { 'Content-Type': 'application/graphql' };

export default payload => axios.post('/graphql', payload, { headers })
  .then(resp => res.data);
