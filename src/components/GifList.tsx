import GifItem from './GifItem';

import useGiphy from '../hooks/useGiphy';

interface GifListProps {
  searchInput: string;
}

const GifList: React.FC<GifListProps> = ({ searchInput }) => {
  const { data, isLoading } = useGiphy({
    q: searchInput,
  });

  if (isLoading) return <p>Loading data...</p>;

  if (!data) return <p>Search gif above...</p>;

  return (
    <div className='grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto'>
      {data?.data.map((giphy, index) => (
        <GifItem key={giphy.id} {...giphy} index={index} />
      ))}
    </div>
  );
};

export default GifList;
