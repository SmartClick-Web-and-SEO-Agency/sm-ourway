import { useContext } from 'react';
import { ArticlesContext } from '../store/articles';

import Article from '../components/Article';
import ExternalLink from '../components/ExternalLink';

const Posts = ({ type }) => {
  const { [type]: data } = useContext(ArticlesContext);

  return (
    <>
      {[...data].reverse().map((item) => {
        if (type !== 'internalTools') return <Article item={item} key={item.id} />;
        else if (type === 'internalTools')
          return <ExternalLink item={item.tool_details} key={item.tool_details.title} />;
      })}
    </>
  );
};
export default Posts;
