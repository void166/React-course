import { useState, useEffect } from 'react';
import { ChatInput } from './components/ChatInput';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App() {

  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'goodnight darling',
      'who is ur hero': 'Monhuush shde uur hen bhv',
      'give me unique id': () => `sure here is ur unique id ${crypto.randomUUID()}`
    });
  }, []);

  const [chatMessages, setChatMessages] = useState(() => {
    const saved = localStorage.getItem('messages');
    try {
      return saved ? JSON.parse(saved) : [
        { message: 'hello chatbot', sender: 'user', id: 'id1', time: 1736127288920 },
        { message: 'Hello! How can I help you?', sender: 'robot', id: 'id2', time: 1736127288921 },
        { message: 'can you get me todays date?', sender: 'user', id: 'id3', time: 1736127288922 },
        { message: 'Today is September 27', sender: 'robot', id: 'id4', time: 1736127288923 },
      ];
    } catch (e) {
      console.error("Failed to parse messages from localStorage:", e);
      return [
        { message: 'hello chatbot', sender: 'user', id: 'id1', time: 1736127288920 },
        { message: 'Hello! How can I help you?', sender: 'robot', id: 'id2', time: 1736127288921 },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App;
