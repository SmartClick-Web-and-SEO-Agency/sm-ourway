import Card from '../components/Card';

import manageIcon from '../assets/manage-icon.svg';
import presentationIcon from '../assets/presentation-icon.svg';

import classes from '../css/Home.module.css';

const Training = () => {
  return (
    <>
      <div className={classes.cards}>
        <Card
          title="Organisation & Management Guidelines"
          postsNumber="12"
          icon={manageIcon}
          href="organisation-and-management-guidelines"
        />
        <Card
          title="How-to Processes"
          postsNumber="25"
          icon={presentationIcon}
          href="how-to-processes"
        />
      </div>
    </>
  );
};
export default Training;
