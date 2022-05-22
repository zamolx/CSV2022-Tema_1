const Message = ({ message, index }) => {
    return (<li>{`[${message.user}]:[${message.message}]`}</li>)
}

export default Message;