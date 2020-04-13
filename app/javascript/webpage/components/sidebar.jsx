import React from 'react';
import { Button } from './button';

const Sidebar = (props) => {

  return (
    <div className="col-12 col-lg-3 sidebar">
      <div id="shifter">
        <img src="https://res.cloudinary.com/mhoare/image/upload/c_pad,w_400/profile.jpg" width="200" />
        {props.tabs.map(tab => {
          return <Button key={tab} text={tab} tabs={props.tabs} />
        })}
      </div>
    </div>
  );
}

export default Sidebar;
