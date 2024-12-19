import { useState, useEffect } from 'react';
import AnalyzeModal from './components/AnalyzeModal';
import BurgerIcon from './components/BurgerIcon';
import Menu from './components/Menu';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState('');

  const [emptyInput, setEmptyInput] = useState(false);

  const handleHideModal = () => setShowModal(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    if (!url) {
      console.log('url is empty');
      setEmptyInput(true);

      setTimeout(() => {
        setEmptyInput(false);
      }, 3000);
      return;
    }
    setShowModal(true);
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/analyze', {
        // const response = await fetch('http://localhost:3000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const result = await response.json();
      console.log(result);

      if (!result.length) {
        setData(null);
        setIsLoading(false);
        return;
      }

      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = state => {
    setShowMenu(state);
  };

  return (
    <div>
      <BurgerIcon sendMenuState={handleShowMenu} isOpen={showMenu} />
      {showMenu && <Menu sendMenuState={handleShowMenu} showMenu={showMenu} />}
      <main
        className={`flex flex-col items-center pb-24 pt-12 ${
          showMenu
            ? 'ml-64 transition-all duration-300'
            : 'transition-all duration-300'
        }`}
      >
        {/* <main className='flex flex-col items-center pb-24 pt-12 ml-72'> */}
        <h1 className='text-center text-6xl capitalize'>
          discover the truth behind <br />
          <div className='inline-block bg-gradient-to-r from-[#146EB4] to-[#ff9900] bg-clip-text text-transparent'>
            amazon reviews
          </div>
        </h1>

        <p className='p-12 text-center'>
          Enter any amazon product URL to reveal genuine sentiment analysis
          <br />
          and spot fake reviews instantly
        </p>

        <div>
          <form
            className='flex flex-col items-center gap-8'
            onSubmit={handleSubmit}
          >
            <input
              type='url'
              value={url}
              onChange={e => setUrl(e.target.value)}
              className='w-[513px] rounded-md p-2 text-black'
              placeholder='URL'
            />
            {emptyInput && (
              <p className='transition-all duration-1000'>
                Input cannot be empty
              </p>
            )}
            <button
              type='submit'
              className='w-36 rounded-md bg-[#146EB4] p-2 hover:bg-[#0c426c]'
            >
              Analyze
            </button>
          </form>
        </div>

        {!showErrorModal && showModal && (
          <AnalyzeModal
            isLoading={isLoading}
            onConfirm={handleHideModal}
            data={data}
          />
        )}
      </main>
    </div>
  );
}

export default App;
