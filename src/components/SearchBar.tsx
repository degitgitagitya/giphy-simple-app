import { useEffect, useState } from 'react';
import { useSearchParam, useDebounce } from 'react-use';

interface SearchBarProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchInput }) => {
  const [value, setValue] = useState('');
  const [initialized, setInitialized] = useState(false);

  const search = useSearchParam('search');

  useEffect(() => {
    if (search && !initialized) {
      setValue(search);
      setSearchInput(search);
      setInitialized(true);
    }
  }, [search]);

  useDebounce(
    () => {
      setSearchInput(value);
      history.pushState(
        {},
        '',
        location.pathname +
          `?` +
          new URLSearchParams({
            search: value,
            mode: 'search',
          }).toString()
      );
    },
    2000,
    [value]
  );

  return (
    <>
      <input
        type='text'
        placeholder='Search here...'
        className='input w-full max-w-md input-bordered input-primary flex-shrink-0'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <hr className='border-secondary border-2 w-full' />
    </>
  );
};

export default SearchBar;
