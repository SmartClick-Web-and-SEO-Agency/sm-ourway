import Card from '../components/Card';

import companyIcon from '../assets/company-icon.svg';
import toolsIcon from '../assets/tools-icon.svg';
import trainingIcon from '../assets/training-icon.svg';

import classes from '../css/Home.module.css';

const Home = () => {
  return (
    <>
      <div className={classes.cards}>
        <Card
          title="Company"
          postsNumber="12"
          icon={companyIcon}
          href="company"
        />
        <Card title="Tools" postsNumber="25" icon={toolsIcon} href="tools" />
        <Card
          title="Training"
          postsNumber="38"
          icon={trainingIcon}
          href="training"
        />
      </div>
    </>
  );
};
export default Home;
