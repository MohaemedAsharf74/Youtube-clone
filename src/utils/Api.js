import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = { 
    params: {
      
      maxResults: '50',
      
    },
    headers: {
      'X-RapidAPI-Key': '92b5603311msh4a7143f635bf4e8p10fcf6jsn9732cce7494f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export async function getData(url){
   
let {data}= await axios.get(`${BASE_URL}/${url}`,options)
//console.log(data)
return data

}