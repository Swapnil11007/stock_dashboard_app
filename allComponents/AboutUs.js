import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About Us</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</Text>
      </View>

      <Text style={styles.teamHeader}>Our Team</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.name}>Alice Johnson</Text>
              <Text style={styles.role}>CEO & Founder</Text>
              <Text>Passionate about making a positive impact in the business world.</Text>
              <Text>alice@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.name}>Bob Smith</Text>
              <Text style={styles.role}>Art Director</Text>
              <Text>Creative thinker with a keen eye for design and aesthetics.</Text>
              <Text>bob@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.name}>Eva White</Text>
              <Text style={styles.role}>Designer</Text>
              <Text>Passionate about creating beautiful and user-friendly designs.</Text>
              <Text>eva@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  teamHeader: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '80%',
    marginBottom: 20,
    borderRadius: 10,
  },
  cardContent: {
    padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  role: {
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default AboutUs;
