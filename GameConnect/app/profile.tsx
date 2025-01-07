import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.avatar}
      />
      <Text style={styles.userName}>PlayerOne</Text>
      <Text style={styles.bio}>Level 50 Gamer | RPG Fan | Streamer</Text>

      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>200</Text>
          <Text style={styles.statLabel}>Friends</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>50</Text>
          <Text style={styles.statLabel}>Games</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>10k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: '#b3b3cc',
    marginBottom: 20,
    textAlign: 'center',
  },
  editProfileButton: {
    backgroundColor: '#34c759',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  editProfileButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#b3b3cc',
  },
});
