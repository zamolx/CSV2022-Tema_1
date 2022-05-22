import Message from "./message";

const ChatBox = ({ messages }) => {
    return (<>
        <ul id="messages">{messages.map((message, index) =>
            (<Message key={`message.message-${index}`} message={message} index={index} />))}
        </ul>
    </>)
}

export default ChatBox;