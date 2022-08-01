import './App.css';
import io from 'socket.io-client' 

const socket = io('http://localhost:8080')

function App() {
  return (
    <div className="App">
      <h1>Hello There!</h1>
    </div>
  );
}

export default App;
