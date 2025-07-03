import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { router, useRouter } from 'expo-router';
import { DotIndicator } from 'react-native-indicators';


const players = [
  'Player One', 'Player Two', 'Player Three', 'Player Four', 'Player Five',
  'Player Six', 'Player Seven', 'Player Eight', 'Player Nine', 'Player Ten',
  'Player One', 'Player Two', 'Player Three', 'Player Four', 'Player Five',
  'Player Six', 'Player Seven', 'Player Eight', 'Player Nine', 'Player Ten',
];

export default function WaitingRoom() {
  // Split players into two columns
  const leftColumn = players.slice(0, 10);
  const rightColumn = players.slice(10, 20);

  return (
    <View style={styles.container}
            paddingTop={70}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/images/greenXwhite_bag.png')} style={styles.bagIcon} />
          <Text style={styles.lobbyText}>lobby#</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/')}>
          <View style={styles.exitButton}
                onPress={() => router.push('/')}>
            <Image source={require('../assets/images/exit.png')} style={styles.exitIcon} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ width: 1000, height: 50, alignSelf: 'center' }}>
            <DotIndicator color="#fff" size={10} count={4} />
      </View>

      {/* Status Message */}
      <Text style={styles.statusText}>Waiting for Gamemaster{'\n'}to begin game</Text>

      {/* Player List */}
      <View style={styles.playerList}>
        <View style={styles.playerColumn}>
          {leftColumn.map((name, i) => (
            <Text style={styles.playerName} key={i}>{`${i + 1}. ${name}`}</Text>
          ))}
        </View>
        <View style={styles.playerColumn}>
          {rightColumn.map((name, i) => (
            <Text style={styles.playerName} key={i}>{`${i + 11}. ${name}`}</Text>
          ))}
         <TouchableOpacity style={styles.button} 
            onPress={() => router.push('/pregame')}>
          <Text>Pregame room</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bagIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
    resizeMode: 'contain',
  },
  lobbyText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  exitButton: {
    backgroundColor: '#B00020',
    borderRadius: 8,
    padding: 8,
    resizeMode: 'contain',
  },
  exitIcon: {
    width: 28,
    height: 28,
    tintColor: 'white',
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },

  statusText: {
    color: '#B0B0C3',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  playerList: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  playerColumn: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  playerName: {
    color: 'white',
    fontSize: 20,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#B00020',
    borderRadius: 8,
    padding: 8,
    resizeMode: 'contain',
  },
});
