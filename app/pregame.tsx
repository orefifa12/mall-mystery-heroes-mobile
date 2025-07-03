import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';


export default function Pregame() {
  // Example data
  const lobbyNumber = '1234';
  const targets = ['Opponent 1', 'Opponent 2'];
  const countdown = 30;

  return (
    <View style={styles.background}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/images/greenXwhite_bag.png')} style={styles.bagIcon} />
          <Text style={styles.lobbyText}>lobby#{lobbyNumber}</Text>
        </View>
        <TouchableOpacity style={styles.exitButton} onPress={() => router.push('/waitingRoom')}>
          <Image source={require('../assets/images/exit.png')} style={styles.exitIcon} />
        </TouchableOpacity>
      </View>

      {/* Targets */}
      <View style={styles.targetsSection}>
        <Text style={styles.targetsLabel}>Your targets are</Text>
        {targets.map((target, idx) => (
          <Text key={idx} style={styles.targetName}>{target}</Text>
        ))}
      </View>

      {/* Countdown Circle */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.beginText}>Begin in</Text>
          <Text style={styles.countdownText}>{countdown}</Text>
        </View>
        <TouchableOpacity style={styles.chatroomButton}
                onPress={() => router.push('/chatroomMain')}></TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#181818',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bagIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'contain',
  },
  lobbyText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  exitButton: {
    backgroundColor: '#B00020',
    borderRadius: 8,
    padding: 8,
  },
  exitIcon: {
    width: 28,
    height: 28,
    tintColor: 'white',
    resizeMode: 'contain',
  },
  targetsSection: {
    paddingTop: 20,
    alignItems: 'center',
    marginBottom: 32,
  },
  targetsLabel: {
    color: '#B0B0C3',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  targetName: {
    color: '#D05B7F',
    fontSize: 28,
    fontWeight: '500',
    paddingTop: 8,
    marginBottom: 2,
  },
  circleContainer: {
    flex: 1,
    marginTop: -230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 320,
    height: 320,
    borderRadius: 160,
    borderWidth: 6,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  beginText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  countdownText: {
    color: 'white',
    fontSize: 120,
    fontWeight: 'bold',
    lineHeight: 140,
  },
  chatroomButton: {
    backgroundColor: '#B00020',
    borderRadius: 8,
    padding: 8,
    resizeMode: 'contain',
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
