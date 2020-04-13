import React, { useContext } from 'react';
import { TabContext } from './app';

export function Button(props) {
  const tabId = `tab-${props.text}`;

  const [currentTab, setCurrentTab] = useContext(TabContext);

  let buffer;

  function clickHandle(e) {
    setCurrentTab(e.target.id);
  }

  return (
    <div
    className="button"
    id={props.text}
    onClick={clickHandle}>
    {props.text}
    </div>
  );
}
