import { useState } from 'react';
import './App.css';
import CardTask from './components/CardTask/CardTask';
import NavBar from './components/Navbar/Navbar';

function App() {
  const [duplicateCount, setDuplicateCount] = useState(0);
  const [duplicateTime, setDuplicateTime] = useState([]);

  const handleDuplicate = () => {
    const currentDuplicateCount = duplicateCount + 1;
    setDuplicateCount(currentDuplicateCount);
    const currentDuplicateTime = [...duplicateTime, duplicateCount]
    setDuplicateTime(currentDuplicateTime)
  };

  const handleRemove = () => {
    const cards = document.querySelector("#card-body");
    const cardNodes = cards.childNodes;
    const removeNode = cardNodes[cardNodes.length - 1];
    removeNode.remove();

    const currentDuplicateCount = duplicateCount - 1;
    setDuplicateCount(currentDuplicateCount);
  }

  return (
    <div className="container mx-auto my-8">
      <NavBar></NavBar>
      <div className="card-main">
        <div id="card-body">
          <CardTask></CardTask>
          {
            duplicateTime.map(duplicate => <CardTask key={duplicate}></CardTask>)
          }
        </div>
        <div className="text-center mt-8">
          <button className="btn btn-ghost capitalize" onClick={handleDuplicate}>Add More</button>
          {
            duplicateCount > 0 &&
            <button className="btn btn-ghost capitalize" onClick={handleRemove}>Remove</button>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
