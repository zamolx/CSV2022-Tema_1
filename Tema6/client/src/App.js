import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Notes from "./components/notes";


function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [notes, setNotes] = useState();

  useEffect(() => {
    const socket = io();

    socket.on('connected', (arg) => {
      setConnectedSocket(socket);
      setNotes(() => {
        return arg
      })
    });

    socket.on("received response", (response) => {
      setNotes(() => {
        return response
      })
    });
  }, []);

  if (!connectedSocket) {
    return <p>Waiting for connection..</p>
  }

  return (
    <div >
      <Notes socket={connectedSocket} notes={notes}/>
    </div>
  );
}

export default App;
