import Layout from '../components/Layout';

import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();

  return (
    <Layout>
      <div className='text-center w-full h-screen flex flex-col justify-center items-center gap-3'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    </Layout>
  );
};

export default ErrorPage;
