import './App.css';
import {useState,useEffect} from 'react'
import io from 'socket.io-client'
import {nanoid} from 'nanoid'

const socket = io.connect("http://localhost:5000")

function App() {

  const [message,setMessage] = useState("")
  const [chat,setChat] = useState([])

  const sendChat = (e) => {
    e.preventDefault()
    socket.emit("chat",message)
    setMessage("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatty App</h1>
        <form onSubmit={sendChat}>
           <input type='text' placeholder='Send Text' value={message} onChange={(e) => {
            setMessage(e.target.value)
           }} />
           <button type='submit'>Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
