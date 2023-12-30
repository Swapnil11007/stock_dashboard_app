import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleFormSubmit = () => {
    setResponse('Soon you will receive a response');
    // Add logic here to handle form submission
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Us</Text>
        <Text style={styles.subHeaderText}>
          Have questions? Reach out to us directly. Our team will get back to you within hours.
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Your Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Subject"
          value={subject}
          onChangeText={(text) => setSubject(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Your Message"
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
          numberOfLines={4}
          style={[styles.input, styles.messageInput]}
        />
        <Button title="Send" onPress={handleFormSubmit} />
      </View>
      <View style={styles.response}>
        <Text>{response}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  messageInput: {
    height: 80,
  },
  response: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ContactUs;
