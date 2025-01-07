import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const games = [
  { id: '1', name: 'Game 1' },
  { id: '2', name: 'Game 2' },
  { id: '3', name: 'Game 3' },
];

export default function Games() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Library</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.game}>{item.name}</Text>}
      />
      <Button title="Back to Home" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  game: {
    fontSize: 16,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    textAlign: 'center',
    width: '80%',
  },
});
