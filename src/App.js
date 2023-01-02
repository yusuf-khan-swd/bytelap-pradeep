import './App.css';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <div className="m-2">
        <div className="form-control max-w-md mx-auto">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
      </div>
      <div className="m-2">
        <ul className="menu flex-row border-t-4 border-b-4">
          <li><a>Dropdown</a></li>
          <li><a>Filter 2</a></li>
          <li><a>Filter 3</a></li>
          <li><a>Filter 4</a></li>
        </ul>
      </div>
      <div className="m-2 mt-8">
        <div className="h-[180px] bg-[#D9D9D9] flex justify-center items-center mb-8 p-2">One</div>
        <div className="h-[180px] bg-[#D9D9D9] flex justify-end p-2 mb-8">Two</div>
        <div className="h-[180px] bg-[#D9D9D9] flex items-end p-2">Three</div>
      </div>
    </div>
  );
}

export default App;
