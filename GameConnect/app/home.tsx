import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';

// Define the Post type for TypeScript (if you're using TypeScript)
type Post = {
  id: string;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      user: 'PlayerOne',
      avatar: 'https://via.placeholder.com/50',
      content: 'Just hit level 50 in my favorite game! 🎮🔥',
      timestamp: '2m ago',
    },
    {
      id: '2',
      user: 'GameMaster',
      avatar: 'https://via.placeholder.com/50',
      content: 'Anyone up for a raid tonight? Let’s team up! 💪',
      timestamp: '15m ago',
    },
    {
      id: '3',
      user: 'GamerGirl',
      avatar: 'https://via.placeholder.com/50',
      content: 'Loving the new expansion pack! 😍',
      timestamp: '30m ago',
    },
    {
      id: '4',
      user: 'Streamer123',
      avatar: 'https://via.placeholder.com/50',
      content: 'Going live in 10 minutes! 🟢',
      timestamp: '1h ago',
    },
  ]);

  const [newPost, setNewPost] = useState('');
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([
        {
          id: (posts.length + 1).toString(),
          user: 'You',
          avatar: 'https://via.placeholder.com/50',
          content: newPost,
          timestamp: 'Just now', // Add a default timestamp for new posts
        },
        ...posts,
      ]);
      setNewPost('');
    }
  };

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.post}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.postContent}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text
          numberOfLines={expandedPost === item.id ? undefined : 3} // Show 3 lines by default
          style={styles.postText}
        >
          {item.content}
        </Text>
        {item.content.length > 100 && expandedPost !== item.id && (
          <TouchableOpacity onPress={() => setExpandedPost(item.id)}>
            <Text style={styles.viewMore}>View More</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.timestamp}>{item.timestamp || 'No timestamp available'}</Text>
      </View>
    </View>
  );

  const renderLiveUser = (index: number) => (
    <View key={index} style={styles.liveUser}>
      <Image
        source={{ uri: 'https://via.placeholder.com/70' }}
        style={styles.liveAvatar}
      />
      <Text style={styles.liveText}>Live User {index + 1}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Who's Live Section */}
      <View style={styles.liveSection}>
        <Text style={styles.sectionTitle}>Who's Live</Text>
        <FlatList
          data={[...Array(10)]}
          horizontal
          renderItem={({ index }) => renderLiveUser(index)}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.liveScroll}
        />
      </View>

      {/* Gaming News Section */}
      <View style={styles.newsSection}>
        <Text style={styles.sectionTitle}>Top Gaming News</Text>
        <FlatList
          data={[...Array(5)].map((_, index) => ({
            id: index.toString(),
            title: `Gaming News Headline ${index + 1}`,
          }))}
          renderItem={({ item }) => (
            <View style={styles.newsItem}>
              <Text style={styles.newsText}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Main Content */}
      <View style={styles.centerContent}>
        {/* Most Recent Posts */}
        <Text style={styles.sectionTitle}>Most Recent Posts</Text>
        {/* Create Post Section */}
        <View style={styles.postInputContainer}>
          <TextInput
            style={styles.postInput}
            placeholder="What's on your mind?"
            placeholderTextColor="#aaa"
            value={newPost}
            onChangeText={setNewPost}
          />
          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
        {/* Posts */}
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.feed}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
  },
  liveSection: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  liveScroll: {
    paddingVertical: 10,
  },
  liveUser: {
    alignItems: 'center',
    marginRight: 15,
  },
  liveAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#34c759',
    marginBottom: 5,
  },
  liveText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  newsSection: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  newsItem: {
    backgroundColor: '#27293d',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  newsText: {
    fontSize: 14,
    color: '#fff',
  },
  centerContent: {
    width: '100%',
    maxWidth: 600, // Constrain the content to a fixed width
    padding: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  postInputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#27293d',
    alignItems: 'center',
    marginBottom: 20, // Add spacing below the Create Post box
    borderRadius: 8,
    width: '100%',
  },
  postInput: {
    flex: 1,
    backgroundColor: '#3c3f58',
    color: '#fff',
    borderRadius: 8,
    padding: 15,
    marginRight: 10,
    fontSize: 16,
  },
  postButton: {
    backgroundColor: '#34c759',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feed: {
    width: '100%',
    alignItems: 'center',
  },
  post: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#27293d',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    maxWidth: 400,
    minHeight: 150, // Ensure uniform post height
    maxHeight: 150,
    overflow: 'hidden', // Prevent content overflow
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  postContent: {
    flex: 1,
    justifyContent: 'space-between', // Distribute content vertically
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  postText: {
    fontSize: 14,
    color: '#b3b3cc',
    marginBottom: 10,
    lineHeight: 20, // Consistent spacing between lines
  },
  viewMore: {
    fontSize: 12,
    color: '#007bff',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
});
