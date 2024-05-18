import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Random() {
  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-500 flex flex-col items-center rounded-lg border-black gap-y-5 mt-[15px]'>
      <h1 className='mt-3 text-2xl underline uppercase font-bold'>A Random Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450px" />)
      }
      
       <button onClick={ () => fetchData() } 
       className='bg-slate-200 opacity-90 w-9/12 rounded-lg my-4 p-3'
       >Generate</button>
    </div> 
  )
}