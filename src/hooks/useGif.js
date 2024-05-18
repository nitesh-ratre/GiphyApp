import {useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGif({tag} = {tag: ''}) { // Set a default value for tag
    const [gif, setGif]  = useState('');
    const [loading, setLoading] = useState(false);    
     
    async function fetchData(tag){
      setLoading(true);
      try{
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url );
        const imageSource = data.data.images.downsized_large.url;
        console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
      }
      catch(error) {
        console.log('Error fetching data: ', error);
      }
    }
  
    useEffect(() => {
      fetchData(tag);
    }, [tag]);

    return {gif, loading, fetchData};
}
