import React, { useState, useEffect } from 'react';
import { Button } from './button';

const Sidebar = (props) => {
  const tabs = 'INTRO BIO CAREER CONTACT'.split(" ");

  return (
    <div className="sidebar">
      <div id="shifter">
        {tabs.map(tab => {
          return <Button key={tab} text={tab} tabs={tabs}/>
        })}
      </div>
    </div>
  );
}

export default Sidebar;
