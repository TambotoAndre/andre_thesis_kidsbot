import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sent from '../../assets/icons/sent.png'; // Ensure the import path is correct
import {Header} from '../../components';

// const Chat = ({navigation, route}) => {
//   const {jsonData} = route.params;
//   const email = jsonData[0].email;
//   const [inputText, setInputText] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [recentQuestions, setRecentQuestions] = useState([]);

//   const flatListRef = useRef(null);
//   useEffect(() => {
//     loadRecentQuestions();
//   }, []);

//   const loadRecentQuestions = async () => {
//     try {
//       const storedQuestions = await AsyncStorage.getItem('recentQuestions');
//       if (storedQuestions !== null) {
//         setRecentQuestions(JSON.parse(storedQuestions));
//       }
//     } catch (error) {
//       console.error('Error loading recent questions:', error);
//     }
//   };

//   const saveRecentQuestions = async questions => {
//     try {
//       await AsyncStorage.setItem('recentQuestions', JSON.stringify(questions));
//     } catch (error) {
//       console.error('Error saving recent questions:', error);
//     }
//   };
//   const sendQuestion = async () => {
//     if (!inputText.trim()) return;
//     const newMessage = {text: inputText, from: 'user'};
//     const updatedMessages = [...messages, newMessage];
//     setMessages(updatedMessages);
//     setInputText('');

//     try {
//       const response = await fetch('https://kidsbot.online:5000/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({question: inputText, email: email}),
//       });
//       const responseData = await response.text();
//       const serverResponseMessage = {text: responseData, from: 'server'};
//       setMessages([...updatedMessages, serverResponseMessage]);
//       saveRecentQuestions([inputText, ...recentQuestions]);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

const Chat = ({navigation, route}) => {
  const {jsonData} = route.params;
  // const email = jsonData[0].email;
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [recentQuestions, setRecentQuestions] = useState([]);

  const flatListRef = useRef(null);

  useEffect(() => {
    loadChatMessages();
    loadRecentQuestions();
  }, []);

  const loadChatMessages = async () => {
    try {
      const storedMessages = await AsyncStorage.getItem('chatMessages');
      if (storedMessages !== null) {
        setMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error('Error loading chat messages:', error);
    }
  };

  // const saveChatMessages = async messages => {
  //   try {
  //     await AsyncStorage.setItem('chatMessages', JSON.stringify(messages));
  //   } catch (error) {
  //     console.error('Error saving chat messages:', error);
  //   }
  // };

  const loadRecentQuestions = async () => {
    try {
      const storedQuestions = await AsyncStorage.getItem('recentQuestions');
      if (storedQuestions !== null) {
        setRecentQuestions(JSON.parse(storedQuestions));
      }
    } catch (error) {
      console.error('Error loading recent questions:', error);
    }
  };

  // const saveRecentQuestions = async questions => {
  //   try {
  //     await AsyncStorage.setItem('recentQuestions', JSON.stringify(questions));
  //   } catch (error) {
  //     console.error('Error saving recent questions:', error);
  //   }
  // };

  const sendQuestion = async () => {
    if (!inputText.trim()) return;
    const newMessage = {text: inputText, from: 'user'};
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInputText('');

    try {
      const response = await fetch('https://kidsbot.online:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({question: inputText}),
      });
      const responseData = await response.text();
      const serverResponseMessage = {text: responseData, from: 'server'};
      const allMessages = [...updatedMessages, serverResponseMessage];
      setMessages(allMessages);
      // saveChatMessages(allMessages);
      // saveRecentQuestions([inputText, ...recentQuestions]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderItem = ({item}) => (
    <View
      style={
        item.from === 'user'
          ? styles.userMessageContainer
          : styles.serverMessageContainer
      }>
      {item.from === 'server' && (
        <FontAwesome5 name="android" size={24} color="#FFFFFF" />
      )}
      <Text
        style={
          item.from === 'user' ? styles.userMessage : styles.serverMessage
        }>
        {item.text}
      </Text>
      {item.from === 'user'}
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        title="Chat"
        onBack={() => navigation.goBack('Home', {jsonData})}
      />
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({animated: true})
        }
        style={{flex: 1, width: '100%'}}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInputText}
          value={inputText}
          placeholder="Ask Me"
          placeholderTextColor="#FFFFFF"
        />
        <TouchableOpacity onPress={sendQuestion} style={styles.sendButton}>
          <Image source={sent} style={{width: 24, height: 24}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f3',
    padding: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    elevation: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: '#00dbde',
    fontSize: 16,
  },
  sendButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc00ff',
    borderRadius: 25,
    elevation: 10,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#00dbde',
    borderRadius: 20,
    marginBottom: 8,
    padding: 10,
    elevation: 10,
  },
  serverMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#fc00ff',
    borderRadius: 20,
    marginBottom: 8,
    padding: 10,
    elevation: 10,
  },
  userMessage: {
    maxWidth: '80%',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  serverMessage: {
    maxWidth: '80%',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});

export default Chat;
