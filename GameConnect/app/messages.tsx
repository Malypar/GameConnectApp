import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const messages = [
  { id: '1', user: 'PlayerOne', message: 'Hey, are you online?' },
  { id: '2', user: 'GameMaster', message: 'Let’s team up later!' },
  { id: '3', user: 'You', message: 'Sure! Let me finish this quest.' },
];

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.userName}>{item.user}:</Text>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    padding: 10,
  },
  messagesList: {
    paddingBottom: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  userName: {
    fontWeight: 'bold',
    color: '#34c759',
    marginRight: 5,
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#27293d',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#3c3f58',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#34c759',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
