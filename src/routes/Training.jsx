import { useContext } from 'react';
import { ArticlesContext } from '../store/articles';

import Card from '../components/Card';

import manageIcon from '../assets/manage-icon.svg';
import presentationIcon from '../assets/presentation-icon.svg';
import projectsIcon from '../assets/projects-icon.svg';

import classes from '../css/Home.module.css';

const Training = () => {
  const { howto, organisation, projects } = useContext(ArticlesContext);

  return (
    <>
      <div className={classes.cards}>
        <Card
          title="Organisation & Management Guidelines"
          postsNumber={organisation.length}
          icon={manageIcon}
          href="organisation-and-management-guidelines"
        />
        <Card
          title="How-to Processes"
          postsNumber={howto.length}
          icon={presentationIcon}
          href="how-to-processes"
        />
        <Card
          title="Projects"
          postsNumber={projects.length}
          icon={projectsIcon}
          href="projects"
        />
      </div>
    </>
  );
};
export default Training;
