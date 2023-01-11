import './App.css';
import './Navbar';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;

  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
