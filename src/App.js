// import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Contents from './Components/Contents.jsx';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Contents />
    </div>
  );
}

export default App;
