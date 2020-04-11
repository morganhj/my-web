import React, { useState, useEffect } from 'react';

export function useTabClick(tab) {
  const [currentTab, setCurrentTab] = useState(null)

  useEffect(() => {
    function handleClick() {
      setCurrentTab(tab)
    }
  });
  return currentTab;
}

export function Button(props) {
  const currentTab = useTabClick(props.text)
  const tabId = `tab-${props.text}`;

  return (
    <div className="button" id={tabId} onClick={handleClick}>{props.text}</div>
  );
}
