// This is the main screen of the app AKA the Login Page
import React, { useState } from 'react';
import { TextInput, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
  const [playerName, setPlayerName] = useState('');
  const [lobby, setLobby] = useState('');
  const router = useRouter();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.background}
      >
        <View style={{height: 300}}/>
        <TextInput
          style={styles.input}
          paddingHorizontal={25}
          onChangeText={setPlayerName}
          value={playerName}
          placeholder="Player Name"
          placeholderTextColor="#B0B0C3"
        />
        <TextInput
          style={styles.input}
          paddingHorizontal={25}
          onChangeText={setLobby}
          value={lobby}
          placeholder="Lobby #"
          placeholderTextColor="#B0B0C3"
        />
        <TouchableOpacity style={styles.button}
          onPress={() => router.push('/waitingRoom')}
        >
          <Text style={styles.buttonText}>Join room</Text>
        </TouchableOpacity>
        <View style={styles.bottomRow}>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#181818',
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 40,
    textAlign: 'center',
  },
  input: {
    width: 280,
    height: 44,
    backgroundColor: '#23232A',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#fff',
    color: 'white',
    paddingHorizontal: 20,
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    width: 200,
    height: 48,
    backgroundColor: '#23232A',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 40,
  },
  buttonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  bottomRow: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
});
