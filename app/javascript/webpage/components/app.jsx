import React from 'react';
import Sidebar from './sidebar';
import Content from './content';
import Footer from './footer';

const App = (props) => {
  return (
    <div className="app">
      <div className="main">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
