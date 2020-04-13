import React, { useContext } from 'react';
import { TabContext } from './app';
import Bio from './content/bio';
import Education from './content/education';
import Career from './content/career';
import Contact from './content/contact';

function caseFunction(currentTab) {
  switch (currentTab) {
    case 'BIO': { return <Bio /> }
    case 'EDUCATION': { return <Education /> }
    case 'CAREER': { return <Career /> }
    case 'CONTACT': { return <Contact /> }
    default: return <h1>Nothing</h1>;
  }
}

const Content = (props) => {
  const [currentTab, setCurrentTab] = useContext(TabContext);
  return (
    <div className="col-12 col-lg-9 content">
      { caseFunction(currentTab) }
    </div>
  );
}

export default Content;
