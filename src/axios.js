import axios from 'axios';

const instance = axios.create( {
  baseURL: 'https://thoth-e5318-default-rtdb.firebaseio.com'
} );

export default instance;