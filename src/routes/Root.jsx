import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import logoutIcon from '../assets/logout-icon.svg';

const Root = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('SmartClick - OurWay');

  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

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

      <button onClick={handleLogout}>
        <img className="logout-icon" src={logoutIcon} alt="Logout Icon" />
      </button>
    </>
  );
};
export default Root;
