import React, { useRef, useState } from "react";
import Notes from './dragableNotes.json'

export const DragableNotes = () => {
  const [items, setItems] = useState(Notes);

  const sourceItem = useRef();
  const sourceContainer = useRef();

  const handleDragStart = (e, container, item) => {
    e.target.style.opacity = "0.5";
    sourceItem.current = item;
    sourceContainer.current = container;
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (container) => {
    setItems((prev) => {
      const newlist = { ...prev };
      newlist[sourceContainer.current] = newlist[sourceContainer.current].filter(i => i!==sourceItem.current);
      newlist[container] = [...newlist[container] , sourceItem.current];
      return newlist;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  }
  return (
    <div className="jira-header">
      {Object.keys(items).map((itemKey, index) => (
        <div
          className="jira-container"
          key={index}
          onDrop={() => handleDrop(itemKey)}
          onDragOver={handleDragOver}
        >
          <h3>{itemKey}</h3>
          {items[itemKey].map((data, id) => (
            <div
              key={id}
              className="jira-item"
              draggable
              onDragStart={(e) => handleDragStart(e, itemKey, data)}
              onDragEnd={handleDragEnd}
            >
              {data}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
