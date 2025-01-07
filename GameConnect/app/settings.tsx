import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.option}>- Notification Preferences</Text>
      <Text style={styles.option}>- Privacy Settings</Text>
      <Text style={styles.option}>- Account Management</Text>
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
  option: {
    fontSize: 16,
    marginVertical: 5,
  },
});
