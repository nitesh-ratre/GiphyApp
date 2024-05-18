import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='relative w-full h-screen flex flex-col background overflow-x-hidden items-center'>
      <h1 className='mt-[40px] p-[10px] w-11/12 rounded-lg text-center font-bold  text-4xl bg-white  '>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
