import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import QuestionAnswers from "./components/question_answers";
import QuestionForm from "./components/question_form";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const socket = io();

    socket.on('connected', (arg) => {
      setConnectedSocket(socket);
      setResponses(() => {
        return Object.assign(arg)
      })
    });

    socket.on("received response", (response) => {
      setResponses(() => {
        return Object.assign(response)
      })
    });
  }, []);

  if (!connectedSocket) {
    return <p>Waiting for connection..</p>
  }

  return (
    <div >
      <QuestionForm socket={connectedSocket} />
      <QuestionAnswers colors={responses} />
    </div>
  );
}

export default App;
