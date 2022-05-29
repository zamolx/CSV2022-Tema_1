import { useState } from "react";
import Thanks from "./thanks";

const QuestionForm = ({ socket }) => {
    const [response, setResponse] = useState('');
    const [answer, setAnswer] = useState(false);
    const [error, setError] = useState();

    const sendResponse = () => {
        if (response.length) {
            socket.emit('chat message', response);
            setResponse('');
            setAnswer(true);
        } else {
            setError("Please provide an aswer");
        }
    };

    const handleAnswer = (e) => {
        if (e.target.value) {
            setResponse(e.target.value.trim())
            setError();
        }
    };
    if (answer) return (<><Thanks /></>)
    return (
        <>
            <div className="form-center">
                <label htmlFor="response">Are you an developer?</label>
                <input type="text" name="response" id="respone" placeholder="Enter your answer"
                    onChange={handleAnswer} />
                <button onClick={sendResponse}>Submit</button>
            </div>
            {error ? <p className="error">{error}</p> : null}
        </>
    )
};

export default QuestionForm;