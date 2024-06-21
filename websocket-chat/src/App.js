import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';

let stompClient = null;

function App() {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        connect();
    }, []);

    const connect = () => {
        const socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        setConnected(true);
        stompClient.subscribe('/topic/messages', onMessageReceived);
    };

    const onError = (err) => {
        console.error('Could not connect to WebSocket server. Please refresh this page to try again!');
        console.error(err);
        setTimeout(connect, 5000);  // 5초 후에 다시 연결 시도
    };

    const onMessageReceived = (msg) => {
        const receivedMessage = JSON.parse(msg.body);
        setChatMessages(prevMessages => [...prevMessages, receivedMessage]);
    };

    const sendMessage = () => {
        if (stompClient && connected) {
            if (message.trim()) {
                const chatMessage = {
                    content: message,
                    sender: 'User',
                    type: 'CHAT'
                };
                stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
                setMessage('');
            }
        } else {
            console.error('There is no underlying STOMP connection');
        }
    };

    return (
        <div>
            <h2>React WebSocket Chat</h2>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message here..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                <h3>Messages</h3>
                <div>
                    {chatMessages.map((msg, index) => (
                        <div key={index}>
                            <strong>{msg.sender}:</strong> {msg.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
