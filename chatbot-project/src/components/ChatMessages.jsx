import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  if(!chatMessages || chatMessages.length === 0){
    return(
      <div className='chat-empty'>
        <p className='chat-empty-chat'>Welcome to my chatbot app</p>
      </div>
    );
  }

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
            time = {chatMessage.time}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;