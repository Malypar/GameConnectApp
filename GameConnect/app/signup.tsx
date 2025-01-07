import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

// Define the type for formData
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  platforms: string[];
};

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    platforms: [],
  });

  const router = useRouter();

  const platforms = [
    'PlayStation',
    'Xbox',
    'PC',
    'Nintendo Switch',
    'Mobile',
    'Discord',
    'Twitch',
  ];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('User data:', formData);
      alert('Signup Complete!');
      router.push('/home'); // Redirect to home after signup
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData((prev) => {
      const newPlatforms = prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform];
      return { ...prev, platforms: newPlatforms };
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup - Step {currentStep}/5</Text>
      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.content}>
          {currentStep === 1 && (
            <>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your first name"
                placeholderTextColor="#aaa"
                value={formData.firstName}
                onChangeText={(text) => handleInputChange('firstName', text)}
              />
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your last name"
                placeholderTextColor="#aaa"
                value={formData.lastName}
                onChangeText={(text) => handleInputChange('lastName', text)}
              />
            </>
          )}

          {currentStep === 2 && (
            <>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#aaa"
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
                keyboardType="email-address"
              />
            </>
          )}

          {currentStep === 3 && (
            <>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Choose a username"
                placeholderTextColor="#aaa"
                value={formData.username}
                onChangeText={(text) => handleInputChange('username', text)}
              />
            </>
          )}

          {currentStep === 4 && (
            <>
              <Text style={styles.label}>Select Gaming Platforms</Text>
              {platforms.map((platform) => (
                <TouchableOpacity
                  key={platform}
                  style={[
                    styles.platformButton,
                    formData.platforms.includes(platform) && styles.platformSelected,
                  ]}
                  onPress={() => handlePlatformToggle(platform)}
                >
                  <Text
                    style={[
                      styles.platformButtonText,
                      formData.platforms.includes(platform) && styles.platformSelectedText,
                    ]}
                  >
                    {platform}
                  </Text>
                </TouchableOpacity>
              ))}
            </>
          )}

          {currentStep === 5 && (
            <>
              <Text style={styles.label}>Review Your Information</Text>
              <Text style={styles.summaryText}>First Name: {formData.firstName}</Text>
              <Text style={styles.summaryText}>Last Name: {formData.lastName}</Text>
              <Text style={styles.summaryText}>Email: {formData.email}</Text>
              <Text style={styles.summaryText}>Username: {formData.username}</Text>
              <Text style={styles.summaryText}>
                Platforms: {formData.platforms.join(', ') || 'None selected'}
              </Text>
            </>
          )}
        </ScrollView>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>{currentStep === 5 ? 'Sign Up' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#27293d',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#3c3f58',
    color: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  platformButton: {
    backgroundColor: '#3c3f58',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  platformSelected: {
    backgroundColor: '#007bff',
  },
  platformButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  platformSelectedText: {
    fontWeight: 'bold',
  },
  summaryText: {
    fontSize: 16,
    color: '#b3b3cc',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    maxWidth: 400,
  },
  backButton: {
    backgroundColor: '#ff3b30',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#34c759',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
