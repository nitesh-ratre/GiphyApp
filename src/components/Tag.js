import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Tag() {
  const [tag, setTag] = useState('');
  const {gif, loading, fetchData} = useGif(tag); // Pass tag directly as an argument

  
  return (
    <div className='w-1/2 bg-blue-400 flex flex-col items-center rounded-lg border-black gap-y-5 mt-[15px]'>
      <h1 className='mt-3 text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450px" />)
      }

      <input onChange={(event) => setTag(event.target.value)} type='text' value={tag}
      className='text-center opacity-90 w-9/12 rounded-lg mt-4 p-3' placeholder='Enter tag to find related-Gif' />
      
       <button onClick={() => fetchData(tag) } 
       className='bg-slate-200 opacity-90 w-9/12 rounded-lg mb-4 p-3'
       >Generate</button>
    </div>
  )
}