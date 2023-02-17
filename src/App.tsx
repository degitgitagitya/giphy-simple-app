import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import Welcoming from './components/Welcoming';
import GifList from './components/GifList';
import AppContainer from './components/AppContainer';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Welcoming />
        <AppContainer>
          <SearchBar setSearchInput={setSearchInput} />
          <GifList searchInput={searchInput} />
        </AppContainer>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
