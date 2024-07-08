import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {BackButton, Header} from '../../components';
import {Send} from '../../assets';

const CourseBot = ({navigation}) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      setChatMessages([...chatMessages, {text: inputText, sender: 'user'}]);
      // Add your chatbot logic here and update chatMessages accordingly
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.navigate('MainMenu')} />
      <Text style={styles.title2}>CourseBot</Text>

      <ScrollView style={styles.chatContainer}>
        {chatMessages.map((message, index) => (
          <View
            key={index}
            style={
              message.sender === 'user' ? styles.userMessage : styles.botMessage
            }>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your message..."
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Send />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CourseBot;
const styles = StyleSheet.create({
  title2: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#303B3B',
    top: 30,
    borderBottomColor: '#ABABA7',
    borderBottomWidth: 1,
    width: 315,
    textAlign: 'center',
    left: 40,
    paddingBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#EAEAF5',
  },
  chatContainer: {
    flex: 1,
    padding: 20,
    top: 23,
  },
  userMessage: {
    backgroundColor: 'rgba(133, 87, 177, 0.38)',
    alignSelf: 'flex-end',
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '70%',
  },
  botMessage: {
    backgroundColor: 'rgba(255, 205, 56, 0.5)',
    alignSelf: 'flex-start',
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '70%',
  },
  messageText: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#EAEAF5',
    padding: 8,
  },
  input: {
    flex: 1,
    height: 50,
    width: 325,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 8,
    paddingLeft: 8,
    color: '#757B87',
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
  },
  sendButton: {
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
