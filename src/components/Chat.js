import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('User1'); // Track the current user

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    setMessages([...messages, { user: currentUser, text: newMessage }]);
    setNewMessage('');
    // Toggle between users (for demonstration purposes)
    setCurrentUser((prevUser) => (prevUser === 'User1' ? 'User2' : 'User1'));
  };

  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '200px', marginTop: '10px', marginBottom: '10px' }}>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '10px', marginBottom: '30px' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
