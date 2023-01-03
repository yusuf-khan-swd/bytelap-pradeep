import React from 'react';
import './CardTask.css'

const CardTask = () => {
  return (
    <div className="custom-card">
      <div className="custom-card-body">
        <input defaultValue="College" type="text" className="input-1" />
        <input defaultValue="Field" type="text" className="input-1" />
      </div>
    </div>
  );
};

export default CardTask;