import { useEffect, useState } from "react";


const Notification = ({ socket }) => {
    const [loaded, setLoaded] = useState(false);
    const [notMesage, setNotMessage] = useState('');

    const addNotMessage = (data) => {
        setNotMessage(() => {
            return (data);
        });
    };
    
    useEffect(() => {
        socket.on("notification", (data) => {
            setLoaded(false);
            addNotMessage(data);
            setTimeout(() => {
                setLoaded(true);
            }, 5000);
        });
    }, [])
    
    if (typeof notMesage === 'object' && !loaded) return (
        <div className="container">
            <div className="item">{`[${notMesage.user}] a trimis un mesaj!`}</div>
        </div>
    );
};

export default Notification;