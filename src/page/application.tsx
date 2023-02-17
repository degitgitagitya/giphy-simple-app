import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';
import AppContainer from '../components/AppContainer';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

const queryClient = new QueryClient();

function Application() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <AppContainer>
          <SearchBar setSearchInput={setSearchInput} />
          <GifList searchInput={searchInput} />
        </AppContainer>
      </Layout>
    </QueryClientProvider>
  );
}

export default Application;
