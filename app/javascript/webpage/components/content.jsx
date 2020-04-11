import React from 'react';
import { useTabClick } from './button'

const Content = (props) => {
  const currentTab = useTabClick()
  return (
    <div className="content">
      <h1></h1>
    </div>
  );
}

export default Content;
