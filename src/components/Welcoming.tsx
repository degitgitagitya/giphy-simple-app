import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParam } from 'react-use';

const Welcoming: React.FC = () => {
  const navigate = useNavigate();

  const handleSearchButton = (preset: string = '') => {
    navigate(
      `/application?${new URLSearchParams({
        search: preset,
        mode: 'search',
      }).toString()}`
    );
  };

  const mode = useSearchParam('mode');

  const isSearching = useMemo(() => mode === 'search', [mode]);

  if (isSearching) return null;

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-2'>
      <h3 className='text-xl text-center'>
        Welcome to <span className='line-through'>Night City</span> Ghipy Finder
        Application
      </h3>

      <h2 className='text-lg text-center'>Choose your path here</h2>

      <div className='flex gap-2 flex-col md:flex-row w-full justify-center'>
        <button
          className='btn w-full md:w-64'
          onClick={() => handleSearchButton('cyberpunk')}
        >
          Cyberpunk Giphy
        </button>

        <button
          className='btn btn-outline w-full md:w-64'
          onClick={() => handleSearchButton()}
        >
          Search your own Giphy
        </button>
      </div>
    </div>
  );
};

export default Welcoming;
