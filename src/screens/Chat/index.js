// // import React, {useState, useEffect} from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   ScrollView,
// //   StyleSheet,
// //   Image,
// //   Alert,
// //   Dimensions,
// // } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import {Header} from '../../components'; // Pastikan jalur impor benar
// // import sent from '../../assets/icons/sent.png'; // Pastikan jalur impor benar

// // const Chat = ({navigation}) => {
// //   const [chatMessages, setChatMessages] = useState([]);
// //   const [inputText, setInputText] = useState('');

// //   useEffect(() => {
// //     loadChatMessages();
// //   }, []);

// //   useEffect(() => {
// //     saveChatMessages();
// //   }, [chatMessages]);

// //   const loadChatMessages = async () => {
// //     try {
// //       const storedMessages = await AsyncStorage.getItem('chatMessages');
// //       if (storedMessages !== null) {
// //         setChatMessages(JSON.parse(storedMessages));
// //       }
// //     } catch (error) {
// //       console.error('Error loading chat messages:', error);
// //     }
// //   };

// //   const saveChatMessages = async () => {
// //     try {
// //       await AsyncStorage.setItem('chatMessages', JSON.stringify(chatMessages));
// //     } catch (error) {
// //       console.error('Error saving chat messages:', error);
// //     }
// //   };

// //   const handleSend = async () => {
// //     if (inputText.trim() !== '') {
// //       const userMessage = {text: inputText, sender: 'user'};
// //       setChatMessages([...chatMessages, userMessage]);
// //       setInputText('');

// //       try {
// //         const response = await fetch('https://kidsbot.online:5000/chat', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({question: inputText}),
// //         });

// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }

// //         const data = await response.json();
// //         const botMessage = {text: data.response, sender: 'bot'};
// //         setChatMessages([...chatMessages, botMessage]);
// //       } catch (error) {
// //         console.error('Error fetching response from backend:', error);
// //         Alert.alert(
// //           'Error Message',
// //           'Sorry, request failed. Please try again.',
// //         );
// //       }
// //     }
// //   };

// //   // const handleSend = async () => {
// //   //   if (inputText.trim() !== '') {
// //   //     const userMessage = {text: inputText, sender: 'user'};
// //   //     setChatMessages([...chatMessages, userMessage]);
// //   //     setInputText('');

// //   //     try {
// //   //       const response = await fetch('https://kidsbot.online:5000/chat', {
// //   //         method: 'POST',
// //   //         headers: {
// //   //           'Content-Type': 'application/json',
// //   //         },
// //   //         body: JSON.stringify({question: inputText}),
// //   //       });

// //   //       if (!response.ok) {
// //   //         throw new Error('Network response was not ok');
// //   //       }

// //   //       const data = await response.text(); // Menerima respons mentah
// //   //       const botMessage = {text: data, sender: 'bot'}; // Menggunakan respons mentah
// //   //       setChatMessages([...chatMessages, botMessage]);
// //   //     } catch (error) {
// //   //       console.error('Error fetching response from backend:', error);
// //   //       Alert.alert(
// //   //         'Error Message',
// //   //         'Sorry, request failed. Please try again.',
// //   //       );
// //   //     }
// //   //   }
// //   // };

// //   return (
// //     <View style={styles.bodychat}>
// //       <Header title="Chat" onBack={() => navigation.goBack()} />

// //       <ScrollView style={{flex: 1, marginTop: 50}}>
// //         {chatMessages.map((message, index) => (
// //           <View
// //             key={index}
// //             style={
// //               message.sender === 'user' ? styles.userMessage : styles.botMessage
// //             }>
// //             <Text style={styles.messageText}>{message.text}</Text>
// //           </View>
// //         ))}
// //       </ScrollView>

// //       <View style={styles.inputContainer}>
// //         <TextInput
// //           style={styles.inputBox}
// //           placeholder="Ask Me Something"
// //           placeholderTextColor={'white'}
// //           value={inputText}
// //           onChangeText={setInputText}
// //         />
// //         <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
// //           <Image source={sent} style={styles.sendImg} />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };
// // // Mendapatkan lebar dan tinggi layar
// // const windowWidth = Dimensions.get('window').width;
// // const windowHeight = Dimensions.get('window').height;
// // const styles = StyleSheet.create({
// //   bodychat: {
// //     flexGrow: 1,
// //     backgroundColor: 'white',
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: 10,
// //     padding: 10,
// //     borderTopWidth: 1,
// //     borderColor: '#FFFFFF',
// //     backgroundColor: 'white',
// //   },
// //   inputBox: {
// //     flex: 1, // Menggunakan flex agar inputBox menyesuaikan sisa lebar
// //     fontSize: 16,
// //     paddingVertical: 10,
// //     paddingHorizontal: 15,
// //     color: 'white',
// //     borderRadius: 30,
// //     borderWidth: 2,
// //     borderColor: '#FFFFFF',
// //     marginRight: 10, // Memberikan jarak antara inputBox dan sendButton
// //     backgroundColor: '#00dbde',
// //   },
// //   sendButton: {
// //     backgroundColor: '#fc00ff',
// //     borderRadius: 25,
// //     width: 50,
// //     height: 50,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     elevation: 2,
// //   },
// //   sendImg: {
// //     width: 25,
// //     height: 25,
// //     tintColor: 'white',
// //   },
// //   userMessage: {
// //     backgroundColor: '#00dbde',
// //     alignSelf: 'flex-end',
// //     borderRadius: 20,
// //     marginBottom: 8,
// //     maxWidth: '80%',
// //     padding: 10,
// //     elevation: 1,
// //   },
// //   botMessage: {
// //     backgroundColor: '#fc00ff',
// //     alignSelf: 'flex-start',
// //     borderRadius: 20,
// //     marginBottom: 8,
// //     maxWidth: '80%',
// //     padding: 10,
// //     elevation: 1,
// //   },
// //   messageText: {
// //     color: 'white',
// //     fontFamily: 'Poppins-Regular',
// //     fontSize: 14,
// //     padding: 8,
// //   },
// // });

// // export default Chat;

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Image,
//   Dimensions,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Header} from '../../components';
// import sent from '../../assets/icons/sent.png';
// import {useRoute} from '@react-navigation/native';

// const Chat = ({navigation, route}) => {
//   const [inputText, setInputText] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);
//   const {jsonData} = route.params;

//   useEffect(() => {
//     fetchChatMessages(); // Fetch chat messages when the component mounts
//   }, []);

//   const fetchChatMessages = async () => {
//     try {
//       const response = await fetch('https://kidsbot.online/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({question: ''}),
//       });
//       const data = await response.json();
//       setChatMessages(data);
//     } catch (error) {
//       console.error('Error fetching chat messages:', error);
//     }
//   };

//   const handleSend = async () => {
//     if (inputText.trim() === '') return;

//     const newChatMessages = [
//       ...chatMessages,
//       {text: inputText, sender: 'user'},
//     ];
//     setChatMessages(newChatMessages);
//     setInputText('');

//     try {
//       await AsyncStorage.setItem(
//         'chatMessages',
//         JSON.stringify(newChatMessages),
//       );
//     } catch (error) {
//       console.error('Error saving chat messages:', error);
//     }
//   };

//   const renderItem = ({item}) => (
//     <View
//       style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.bodyChat}>
//       <Header
//         title="Chat"
//         onBack={() => navigation.goBack('Home', {jsonData})}
//       />

//       <FlatList
//         data={chatMessages}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         style={{flex: 1}}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={[styles.inputBox, {color: '#525252'}]}
//           placeholder="Ask Me"
//           placeholderTextColor="#525252"
//           value={inputText}
//           onChangeText={setInputText}
//         />
//         <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
//           <Image source={sent} style={styles.sendImg} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   bodyChat: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     borderTopWidth: 1,
//     borderColor: '#FFFFFF',
//     backgroundColor: '#FFFFFF',
//   },
//   inputBox: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#00dbde',
//     borderRadius: 25,
//     borderWidth: 1,
//     borderColor: '#FFFFFF',
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: '#fc00ff',
//     borderRadius: 25,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 2,
//   },
//   sendImg: {
//     width: 25,
//     height: 25,
//     tintColor: 'white',
//   },
//   userMessage: {
//     backgroundColor: '#00dbde',
//     alignSelf: 'flex-end',
//     borderRadius: 20,
//     marginBottom: 8,
//     maxWidth: '80%',
//     padding: 10,
//     elevation: 1,
//   },
//   botMessage: {
//     backgroundColor: '#fc00ff',
//     alignSelf: 'flex-start',
//     borderRadius: 20,
//     marginBottom: 8,
//     maxWidth: '80%',
//     padding: 10,
//     elevation: 1,
//   },
//   messageText: {
//     color: '#525252',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//   },
// });

// export default Chat;

// import React, {useState, useEffect, useRef} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Image,
//   Alert,
//   Dimensions,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Header} from '../../components';
// import sentIcon from '../../assets/icons/sent.png';
// // import {useCallback} from 'react';

// // // Debounce function
// // function useDebounce(value, delay) {
// //   const [debouncedValue, setDebouncedValue] = useState(value);

// //   useEffect(() => {
// //     const handler = setTimeout(() => {
// //       setDebouncedValue(value);
// //     }, delay);

// //     return () => {
// //       clearTimeout(handler);
// //     };
// //   }, [value, delay]);

// //   return debouncedValue;
// // }

// const Chat = ({navigation, route}) => {
//   const {jsonData} = route.params;
//   // const email = jsonData[0].email;
//   const [inputText, setInputText] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [recentQuestions, setRecentQuestions] = useState([]);
//   const flatListRef = useRef(null);

//   useEffect(() => {
//     loadChatMessages();
//     loadRecentQuestions();
//   }, []);

//   useEffect(() => {
//     saveChatMessages();
//   }, [messages]);

//   const loadChatMessages = async () => {
//     try {
//       const storedMessages = await AsyncStorage.getItem('chatMessages');
//       if (storedMessages !== null) {
//         setMessages(JSON.parse(storedMessages));
//       }
//     } catch (error) {
//       console.error('Error loading chat messages:', error);
//     }
//   };

//   const saveChatMessages = async () => {
//     try {
//       await AsyncStorage.setItem('chatMessages', JSON.stringify(messages));
//     } catch (error) {
//       console.error('Error saving chat messages:', error);
//     }
//   };

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

//   // const handleSend = async () => {
//   //   if (inputText.trim() !== '') {
//   //     const userMessage = {text: inputText, sender: 'user'};
//   //     const updatedMessages = [...messages, userMessage];
//   //     setInputText('');

//   //     try {
//   //       const response = await fetch('https://kidsbot.online:5000/chat', {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify({
//   //           question: inputText,
//   //         }),
//   //       });

//   //       // Check if the response was successful
//   //       if (response.ok) {
//   //         const responseData = await response.json();
//   //         const serverMessage = {text: responseData.response, sender: 'server'};
//   //         updatedMessages.push(serverMessage);
//   //         setMessages(updatedMessages);
//   //         saveRecentQuestions([inputText, ...recentQuestions]);
//   //       } else {
//   //         console.error('Server response not OK:', response.status);
//   //         Alert.alert(
//   //           'Error',
//   //           `Server responded with status: ${response.status}`,
//   //         );
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching response from backend:', error);
//   //       Alert.alert(
//   //         'Error Message',
//   //         'Sorry, request failed. Please try again.',
//   //       );
//   //     }
//   //   }
//   // };

//   const handleSend = async () => {
//     if (inputText.trim() !== '') {
//       const userMessage = {text: inputText, sender: 'user'};
//       const updatedMessages = [...messages, userMessage];
//       setInputText('');

//       try {
//         const response = await fetch('https://kidsbot.online:5000/chat', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             question: inputText,
//             // email: email,
//           }),
//         });

//         const responseData = await response.json();
//         const serverMessage = {text: responseData.response, sender: 'server'};
//         updatedMessages.push(serverMessage);
//         setMessages(updatedMessages);

//         saveRecentQuestions([inputText, ...recentQuestions]);
//       } catch (error) {
//         console.error('Error fetching response from backend:', error);
//         Alert.alert(
//           'Error Message',
//           'Sorry, request failed. Please try again.',
//         );
//       }
//     }
//   };

//   // const handleSend = async () => {
//   //   if (inputText.trim() !== '') {
//   //     const userMessage = {text: inputText, sender: 'user'};
//   //     const updatedMessages = [...messages, userMessage];
//   //     setInputText('');

//   //     try {
//   //       const response = await fetch('https://kidsbot.online:5000/chat', {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify({
//   //           question: inputText,
//   //           // email: email,
//   //         }),
//   //       });

//   //       // Check if response is successful
//   //       if (response.ok) {
//   //         const responseData = await response.text(); // Get raw text response
//   //         const serverMessage = {text: responseData, sender: 'server'};
//   //         updatedMessages.push(serverMessage);
//   //         setMessages(updatedMessages);

//   //         saveRecentQuestions([inputText, ...recentQuestions]);
//   //       } else {
//   //         // Handle error response
//   //         console.error(
//   //           'Error fetching response from backend:',
//   //           response.status,
//   //         );
//   //         Alert.alert(
//   //           'Error Message',
//   //           'Sorry, request failed. Please try again.',
//   //         );
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching response from backend:', error);
//   //       Alert.alert(
//   //         'Error Message',
//   //         'Sorry, request failed. Please try again.',
//   //       );
//   //     }
//   //   }
//   // };

//   const renderItem = ({item}) => (
//     <View
//       style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.bodychat}>
//       <Header title="Chatt" onBack={() => navigation.goBack({jsonData})} />

//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         onContentSizeChange={() =>
//           flatListRef.current.scrollToEnd({animated: true})
//         }
//         style={{flex: 1, marginTop: 50}}
//       />

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Ask Me Something"
//           placeholderTextColor={'white'}
//           value={inputText}
//           onChangeText={setInputText}
//         />
//         <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
//           <Image source={sentIcon} style={styles.sendImg} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const styles = StyleSheet.create({
//   bodychat: {
//     flexGrow: 1,
//     backgroundColor: 'white',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#FFFFFF',
//     backgroundColor: 'white',
//   },
//   inputBox: {
//     flex: 1, // Menggunakan flex agar inputBox menyesuaikan sisa lebar
//     fontSize: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     color: 'white',
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: '#FFFFFF',
//     marginRight: 10, // Memberikan jarak antara inputBox dan sendButton
//     backgroundColor: '#00dbde',
//   },
//   sendButton: {
//     backgroundColor: '#fc00ff',
//     borderRadius: 25,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 2,
//   },
//   sendImg: {
//     width: 25,
//     height: 25,
//     tintColor: 'white',
//   },
//   userMessage: {
//     backgroundColor: '#00dbde',
//     alignSelf: 'flex-end',
//     borderRadius: 20,
//     marginBottom: 8,
//     maxWidth: '80%',
//     padding: 10,
//     elevation: 1,
//   },
//   botMessage: {
//     backgroundColor: '#fc00ff',
//     alignSelf: 'flex-start',
//     borderRadius: 20,
//     marginBottom: 8,
//     maxWidth: '80%',
//     padding: 10,
//     elevation: 1,
//   },
//   messageText: {
//     color: 'white',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//     padding: 8,
//   },
// });
// export default Chat;

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
