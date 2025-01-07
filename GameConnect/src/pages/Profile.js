// pages/Profile.js
import React from 'react';

function Profile() {
  // Mock user data
  const user = {
    username: 'MalykGaming',
    bio: 'Gamer. Streamer. Entrepreneur.',
    posts: [
      { id: 1, content: 'Loving the new COD maps!' },
      { id: 2, content: 'Check out my latest highlight reel.' },
    ],
  };

  return (
    <div style={styles.container}>
      <h2>{user.username}'s Profile</h2>
      <p>{user.bio}</p>
      <h3>Recent Posts</h3>
      {user.posts.map(post => (
        <div key={post.id} style={styles.postItem}>
          {post.content}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    margin: '20px',
  },
  postItem: {
    border: '1px solid #ccc',
    margin: '5px 0',
    padding: '5px',
  }
};

export default Profile;
