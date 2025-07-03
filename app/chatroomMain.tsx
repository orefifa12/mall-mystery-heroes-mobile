import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function chatroomMain() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/greenXwhite_bag.png')} style={styles.bagIcon} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={require('../assets/images/infoWhite.png')} style={styles.infoIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.exitButton}>
              <Image source={require('../assets/images/exit.png')} style={styles.exitIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Message area */}
      <View style={styles.messageArea}>
        <Text style={styles.targetsText}>
          Your targets are Player 1 and Player 4.{"\n"}Good luck.
        </Text>
      </View>

      {/* Chat input bar */}
      <View style={styles.inputBar}>
        <TouchableOpacity>
          <Image source={require('../assets/images/killWhite.png')} style={styles.inputIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/missionWhite.png')} style={styles.inputIcon} />
        </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Message here"
            placeholderTextColor="#B0B0C3"
          />
        <TouchableOpacity>
          <Image source={require('../assets/images/enterWhite.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#96947B',
    paddingTop: 55,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  bagIcon: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    resizeMode: 'contain',
  },
  exitButton: {
    backgroundColor: '#B00020',
    borderRadius: 8,
    padding: 8,
  },
  exitIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
    resizeMode: 'contain',
  },
  messageArea: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  targetsText: {
    color: '#D05B7F',
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: 16,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
  },
  inputIcon: {
    width: 36,
    height: 36,
    marginRight: 12,
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    height: 48,
    backgroundColor: '#23232A',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#fff',
    color: 'white',
    paddingHorizontal: 20,
    fontSize: 18,
    marginRight: 12,
    fontStyle: 'italic',
  },
  sendIcon: {
    width: 40,
    height: 40,
    tintColor: '#A3EBA5',
    resizeMode: 'contain',
  },
}); 