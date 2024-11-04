import { Link } from 'react-router-dom';

import linkIcon from '../assets/link-icon.svg';
import classes from './Article.module.css';

const Article = ({ item, handleClick }) => {
  const date = new Date(item.date);
  const formattedDate = `
                ${
                  date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
                }.${
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  }.${date.getFullYear()}
                `;

  if (item.type === 'howto') item.type = 'training/how-to-processes';
  if (item.type === 'projects') item.type = 'training/projects';
  if (item.type === 'organisation')
    item.type = 'training/organisation-and-management-guidelines';

  console.log(item.type);

  return (
    <article className={classes.article} onClick={handleClick}>
      <p className={classes.date}>{formattedDate}</p>
      <div className={classes.container}>
        <Link
          to={`/${item.type}/${item.slug}-${item.id}`}
          className={classes.heading}
          dangerouslySetInnerHTML={{ __html: item.title?.rendered }}
        ></Link>
        <img className={classes.icon} src={linkIcon} alt="Link icon" />
      </div>
    </article>
  );
};
export default Article;
