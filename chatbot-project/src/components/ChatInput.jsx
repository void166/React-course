import { useState } from 'react'
import dayjs from 'dayjs';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function clearChat(){
    setChatMessages([]);
    localStorage.removeItem('messages');
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    setInputText('');
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={(event)=>{
          if(event.key === 'Enter'){
            sendMessage();
          }
        }}
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
      <button 
        className="send-button"
        onClick={clearChat}
      >
        clear
      </button>
    </div>
  );
}