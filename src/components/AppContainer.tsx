import { useMemo } from 'react';
import { useSearchParam } from 'react-use';

interface AppContainerProps {
  children?: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const mode = useSearchParam('mode');
  const search = useSearchParam('search');

  const isSearching = useMemo(() => mode === 'search', [mode]);

  if (!isSearching) return null;

  return (
    <div className='flex flex-col gap-4 w-full items-center p-4 bg-slate-100/50 shadow-lg h-screen'>
      <h2>Find your favorite Ghipy here</h2>
      {children}
    </div>
  );
};

export default AppContainer;
