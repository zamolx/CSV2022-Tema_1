import { useEffect, useState } from "react";
import ChatBox from "./chat_box";
import MessageForm from "./message_form";
import Notification from "./notification";

const Chat = ({ socket }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = (data) => {
        setMessages((messages) => {
            return ([...messages, data]);
        });
    };

    useEffect(() => {
        socket.on("received message", (data) => {
            addMessage(data)
        });
    }, [])

    return (
        <>
            <ChatBox messages={messages} />
            <MessageForm socket={socket} />
            <Notification socket={socket} />
        </>
    )
};

export default Chat;