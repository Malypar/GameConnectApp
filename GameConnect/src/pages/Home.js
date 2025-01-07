// pages/Home.js
import React from 'react';

function Home() {
  // Mock data
  const posts = [
    { id: 1, user: 'Gamer123', content: 'Just got a Victory Royale!' },
    { id: 2, user: 'ProPlayer', content: 'Grinding ranked mode all night...' },
  ];

  const popularStreams = [
    { id: 1, title: 'Call of Duty Warzone Live', streamer: 'StreamerOne' },
    { id: 2, title: 'League of Legends Ranked', streamer: 'StreamerTwo' },
  ];

  const gamingNews = [
    { id: 1, headline: 'New DLC for Elden Ring Announced!' },
    { id: 2, headline: 'Top 10 Upcoming Indie Games in 2025' },
  ];

  const onlineFriends = [
    { id: 1, username: 'CoolGamer' },
    { id: 2, username: 'AceSniper' },
  ];

  return (
    <div style={styles.container}>
      <h1>Welcome to GameConnect</h1>
      
      <section style={styles.section}>
        <h2>Live Post Feed</h2>
        {posts.map(post => (
          <div key={post.id} style={styles.feedItem}>
            <strong>{post.user}</strong>: {post.content}
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h2>Popular Live Streams</h2>
        {popularStreams.map(stream => (
          <div key={stream.id} style={styles.feedItem}>
            <strong>{stream.streamer}</strong> – {stream.title}
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h2>Current Gaming News</h2>
        {gamingNews.map(news => (
          <div key={news.id} style={styles.feedItem}>
            {news.headline}
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h2>Online Friends</h2>
        {onlineFriends.map(friend => (
          <div key={friend.id} style={styles.feedItem}>
            {friend.username}
          </div>
        ))}
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  section: {
    marginBottom: '30px',
  },
  feedItem: {
    margin: '5px 0',
    padding: '5px',
    border: '1px solid #ccc',
  },
};

export default Home;
