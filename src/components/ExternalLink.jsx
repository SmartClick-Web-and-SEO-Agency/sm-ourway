import linkIcon from '../assets/link-icon.svg';
import classes from './Article.module.css';

const ExternalLink = ({ item }) => {
  return (
    <article className={classes.article}>
      <div className={classes.container}>
        <a href={item.url} className={classes.heading} target="_blank">
          {item.title}
        </a>
        <img className={classes.icon} src={linkIcon} alt="Link icon" />
      </div>
    </article>
  );
};
export default ExternalLink;
