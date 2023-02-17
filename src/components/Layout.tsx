import Background from '../assets/background.jpg';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        background: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <div className='container mx-auto px-4 h-screen'>{children}</div>
    </div>
  );
};

export default Layout;
