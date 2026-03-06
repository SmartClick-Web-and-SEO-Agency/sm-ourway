import { useContext } from 'react';
import { ArticlesContext } from '../store/articles';

import Card from '../components/Card';

import companyIcon from '../assets/company-icon.svg';
import toolsIcon from '../assets/tools-icon.svg';
import trainingIcon from '../assets/training-icon.svg';

import classes from '../css/Home.module.css';

const Home = () => {
  const { company, toolGuides, howto, organisation, projects } = useContext(ArticlesContext);

  return (
    <>
      <div className={classes.cards}>
        <Card title="Company" postsNumber={company.length} icon={companyIcon} href="company" />
        <Card title="Tool Guides" postsNumber={toolGuides.length} icon={toolsIcon} href="tool-guides" />
        <Card
          title="Training"
          postsNumber={howto.length + organisation.length + projects.length}
          icon={trainingIcon}
          href="training"
        />
        <Card title="Tools" href="tools" />
      </div>
    </>
  );
};
export default Home;
