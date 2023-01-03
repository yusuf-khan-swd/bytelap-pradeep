import React from 'react';
import './CardTask.css'

const CardTask = () => {
  return (
    <div className="custom-card bg-gray-300">
      <div className="custom-card-body">
        <input defaultValue="College" type="text" className="input-1 text-xs pl-2" />
        <input defaultValue="Field" type="text" className="input-1 text-xs pl-2" />
      </div>
    </div>
  );
};

export default CardTask;