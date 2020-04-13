import React, { useState, useEffect, useContext, useReducer } from 'react';
import Sidebar from './sidebar';
import Content from './content';
import Footer from './footer';

const tabs = {
  bio: "BIO",
  education: "EDUCATION",
  career: "CAREER",
  contact: "CONTACT"
}

// const TabContext = React.createContext({
//   currentTab: tabs.bio,
//   tabChange: (tab) => {
//     currentTab: tab}
// });

const TabContext = React.createContext();

const App = (props) => {
  const [currentTab, setCurrentTab] = useState(tabs.bio);

  function setTab(tab) {
    setCurrentTab(tab);
  }

  const tabLabels = 'BIO EDUCATION CAREER CONTACT'.split(" ");

  return (
    <div className="container-fluid app">
      <div className="main row">
        <TabContext.Provider value={[currentTab, setCurrentTab]}>
          <Sidebar tabs={tabLabels} />
          <Content tabs={tabLabels} />
        </TabContext.Provider>
      </div>
    </div>
  );
}

export {App};
export {TabContext};
