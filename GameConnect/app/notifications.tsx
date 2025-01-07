import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const notifications = [
  { id: '1', message: 'PlayerTwo sent you a friend request.' },
  { id: '2', message: 'Your raid group is ready to start!' },
  { id: '3', message: 'New update available for your favorite game.' },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.notificationText}>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    padding: 10,
  },
  list: {
    paddingBottom: 10,
  },
  notification: {
    backgroundColor: '#27293d',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  notificationText: {
    fontSize: 14,
    color: '#fff',
  },
});
