import classes from './Header.module.css';

const Header = ({ title, location }) => {
  return (
    <header className={classes.header}>
      <p className={classes.breadcrumbs}>
        Home {location && '>'} {location}
      </p>
      <h1 className={classes.heading}>{title}</h1>
      <input
        className={classes.input}
        type="text"
        placeholder="Search OurWay..."
      />
    </header>
  );
};
export default Header;
