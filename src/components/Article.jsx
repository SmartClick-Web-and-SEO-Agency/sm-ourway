import { Link } from 'react-router-dom';

import linkIcon from '../assets/link-icon.svg';
import classes from './Article.module.css';

const Article = ({ item }) => {
  const date = new Date(item.date);
  const formattedDate = `
                ${
                  date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
                }.${
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  }.${date.getFullYear()}
                `;

  return (
    <article className={classes.article}>
      <p className={classes.date}>{formattedDate}</p>
      <div className={classes.container}>
        <Link to={`${item.slug}-${item.id}`} className={classes.heading}>
          {item.title?.rendered}
        </Link>
        <img className={classes.icon} src={linkIcon} alt="Link icon" />
      </div>
    </article>
  );
};
export default Article;
