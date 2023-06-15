import './App.css';
import Body from './components/Body';
import Button from './components/Button';
import MainImage from './components/MainImage';
import Price from './components/Price';

// todo: style the text in 2nd block

function App() {
  return (
    <div className="App h-screen bg-cream px-4 py-7 max-w-[375px] md:max-w-[600px] md:h-[450px] md:w-full md:p-0 ">
      <div id='contentWrapper' className='h-full bg-white rounded-lg md:flex'>
        <MainImage />
        <div id='mainWrapper' className='flex flex-col items-start m-6 md:max-w-[300px] md:m-0 md:p-8'>
        <Body />
        <Price />
        <Button />

        </div>

      </div>
    </div>
  );
}

export default App;
