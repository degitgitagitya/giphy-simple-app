import { type Giphy } from '../hooks/useGiphy';

interface GifItemProps extends Giphy {
  index: number;
}

const GifItem: React.FC<GifItemProps> = ({ images, title, index }) => {
  return (
    <div
      className={`p-4 items-center justify-center flex ${
        index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
      }`}
    >
      <img src={images.fixed_width.url} alt={title} />
    </div>
  );
};

export default GifItem;
