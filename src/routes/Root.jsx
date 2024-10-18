import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  const [title, setTitle] = useState('SmartClick - OurWay');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      const arr = location.pathname.substring(1).split('-');
      const capitalized = arr
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ');
      setTitle(capitalized);
    } else {
      setTitle('SmartClick - OurWay');
    }
  }, [location]);

  return (
    <>
      <Header title={title} />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default Root;
