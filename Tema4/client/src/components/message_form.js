import { useState } from "react";


const MessageForm = ({ socket }) => {
    const [message, setMessage] = useState([])
    const [user, setUser] = useState('')

    const sendMessage = () => {
        let data = {
            message,
            user
        };
        if (data.message.length === 0 || data.user.length === 0) return;
        socket.emit('chat message', data);
        setMessage('');
    };

    const handleMessageInputChange = (e) => {
        if (e.target.value) {
            setMessage(e.target.value)
        }
    };

    const handleUser = (e) => {
        if (e.target.value) {
            setUser(e.target.value);
        }
    }

    return (
        <div id="form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name"
                onChange={handleUser} />
            <label htmlFor="message">Message:</label>
            <input value={message}
                id="input" type="text"
                name="message" placeholder="Enter your message"
                onChange={handleMessageInputChange} />
            <button onClick={sendMessage}>Send</button>
        </div>
    )
};


export default MessageForm;