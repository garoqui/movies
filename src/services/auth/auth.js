import { API_KEY} from '../../../config.js';

export const login = async()=>{
const token = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`).then(res=>res).then(res=>res.json())
return token;
}