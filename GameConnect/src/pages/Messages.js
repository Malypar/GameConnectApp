// pages/Messages.js
import React from 'react';

function Messages() {
  const mockConversations = [
    { id: 1, friend: 'CoolGamer', lastMessage: 'Let’s squad up!' },
    { id: 2, friend: 'AceSniper', lastMessage: 'Got time for a quick match?' },
  ];

  return (
    <div style={styles.container}>
      <h2>Messages</h2>
      {mockConversations.map(conv => (
        <div key={conv.id} style={styles.conversationItem}>
          <strong>{conv.friend}</strong>: {conv.lastMessage}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    margin: '20px',
  },
  conversationItem: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px'
  }
};

export default Messages;
