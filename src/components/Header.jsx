import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const [title, setTitle] = useState('SmartClick - OurWay');

  useEffect(() => {
    if (location.pathname !== '/') {
      const pathSegments = location.pathname.split('/').filter((x) => x);
      const lastSegment = pathSegments[pathSegments.length - 1];

      const capitalized = lastSegment
        .split('-')
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ');

      setTitle(capitalized);
    } else {
      setTitle('SmartClick - OurWay');
    }
  }, [location]);

  const formatBreadcrumb = (str) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <header className={classes.header}>
      <div className="container">
        <nav>
          <p className={classes.breadcrumbs}>
            <Link to="/">Home</Link>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              return (
                <span key={to}>
                  {' > '}
                  <Link to={to}>{formatBreadcrumb(value)}</Link>
                </span>
              );
            })}
          </p>
        </nav>
        <h1 className={classes.heading}>{title}</h1>
        <input
          className={classes.input}
          type="text"
          placeholder="Search OurWay..."
        />
      </div>
    </header>
  );
};

export default Header;
