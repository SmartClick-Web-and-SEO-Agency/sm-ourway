import { useContext } from 'react';
import { ArticlesContext } from '../store/articles';

import Card from '../components/Card';

import companyIcon from '../assets/company-icon.svg';
import toolsIcon from '../assets/tools-icon.svg';
import trainingIcon from '../assets/training-icon.svg';

import classes from '../css/Home.module.css';

const Home = () => {
  const { company, tools, howto, organisation, projects } =
    useContext(ArticlesContext);

  return (
    <>
      <div className={classes.cards}>
        <Card
          title="Company"
          postsNumber={company.length}
          icon={companyIcon}
          href="company"
        />
        <Card
          title="Tools"
          postsNumber={tools.length}
          icon={toolsIcon}
          href="tools"
        />
        <Card
          title="Training"
          postsNumber={howto.length + organisation.length + projects.length}
          icon={trainingIcon}
          href="training"
        />
      </div>
    </>
  );
};
export default Home;
