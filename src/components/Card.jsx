import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const Card = ({ title, postsNumber, icon, href }) => {
  return (
    <Link to={href} className={classes.card}>
      {icon && <img className={classes.icon} src={icon} alt={title} />}
      <h2 className={classes.heading}>{title}</h2>
      {postsNumber && (
        <p className={classes.info}>
          {postsNumber} {postsNumber === 1 ? 'Article' : 'Articles'}
        </p>
      )}
    </Link>
  );
};
export default Card;
