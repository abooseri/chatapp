
import './App.css';
import io from 'socket.io-client'
import {useState} from 'react'

const socket = io.connect("http://localhost:3001")


function App() {

  const JoinRoom = () => {
    if (username !=="" && room !=="") {
      
    }
  }
  
 const [username, setUsername] = useState("")
 const [room, setRoom] = useState("")

  return (
    <div className="App">
     <h3>Join a Chat</h3>
     <input type="text" placeholder='Name...' onChange={(e) => {
       setUsername(e.target.value)
     }} />
     <input type="text" placeholder='Name...' onChange={(e) => {
       setRoom(e.target.value)
     }} />
     <button>Join A Room</button>
    </div>
  );
}

export default App;
