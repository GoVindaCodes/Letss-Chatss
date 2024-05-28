// // import logo from './logo.svg';
// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import './App.css';

// function App() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [inputText, setInputText] = useState('');


//   const handleMessage = async (msg) => {
//     console.log("handleMessage called with message:", msg);
//     try {
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'user', parts: [{ text: msg }] }
//       ]);

//       const genAI = new GoogleGenerativeAI("AIzaSyAcPxLmXULOQ6hlPRzc93WgVf2yOKQo1x8");
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const chat = model.startChat({
//         history: chatHistory,
//         generationConfig: {
//           maxOutputTokens: 100,
//         },
//       });
//       const result = await chat.sendMessage(msg);
//       const response = await result.response;
//       const text = await response.text();
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'model', parts: [{ text }] }
//       ]);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleSendMessage = () => {
//     if (inputText.trim() !== '') {
//       handleMessage(inputText.trim());
//       setInputText('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       // e.preventDefault();
//       e.preventDefault(); // Prevent default behavior of Enter key press
//       handleSendMessage();
//     }
//   };
//   return (
//     // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundurl: '#f3f4f6' }}>
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundImage: 'url("https://images.unsplash.com/photo-1710610383283-37ecdf156c60?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='hi'>

//       <div style={{ backgroundColor: 'rgba(155, 152, 155, 0.6)', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '900px', height: '500px', overflowY: 'auto', padding: "16px", marginTop: "50px" }}>
//         <div style={{ textAlign: 'center', color: '#yellow', fontSize: '24px', marginBottom: '20px' }}>
//           Let's chat!
//         </div>
//         {chatHistory.map((message, index) => (
//           <div key={index} style={{ padding: '8px', borderRadius: '8px', marginBottom: '4px', alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start', backgroundColor: message.role === 'user' ? 'rgba(190, 231, 253, 0.7)' : 'rgba(243, 244, 246, 0.9)' }}>
//             {message.parts && message.parts.length > 0 && message.parts[0].text}
//           </div>
//         ))}
//       </div>
//       <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
//         <textarea
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           onKeyPress={handleKeyPress}
//           style={{ resize: 'none', width: '900px', height: '50px', border: '1px solid #cbd5e0', borderRadius: '8px', padding: '8px', outline: 'none', marginRight: '8px', backgroundColor: 'rgba(255, 252, 255, 0.6)' }}
//           placeholder="Ask your question..."
//         />

//         {/* <button
//           onClick={handleSendMessage}
//           style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', cursor: 'pointer' }}
//         >
//           Send
//         </button> */}
//       </div>
//     </div >
//   );
// }

// export default App;





// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import './App.css';

// function App() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [inputText, setInputText] = useState('');

//   const handleMessage = async (msg) => {
//     try {
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'user', parts: [{ text: msg }] }
//       ]);

//       const genAI = new GoogleGenerativeAI("AIzaSyAcPxLmXULOQ6hlPRzc93WgVf2yOKQo1x8");
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const chat = model.startChat({
//         history: chatHistory,
//         generationConfig: {
//           maxOutputTokens: 100,
//         },
//       });
//       const result = await chat.sendMessage(msg);
//       const response = await result.response;
//       // const text = await response.text();
//       let text = await response.text();

//       // Check if the response is empty or null
//       if (!text || text.trim() === "") {
//         text = "I'm still learning. You can ask another question.";
//       }
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'model', parts: [{ text }] }
//       ]);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleSendMessage = () => {
//     if (inputText.trim() !== '') {
//       handleMessage(inputText.trim());
//       setInputText('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className='container'>
//       <div className='chat-container'>
//         <div className='chat-history'>
//           {chatHistory.map((message, index) => (
//             <div key={index} className={`chat-message ${message.role}`}>
//               {message.parts && message.parts.length > 0 && message.parts[0].text}
//             </div>
//           ))}
//         </div>
//         <div className='input-container'>
//           <textarea
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Ask your question..."
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useRef, useEffect } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import './App.css';

// function App() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     // Scroll to the bottom of the chat container whenever chatHistory changes
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   const handleMessage = async (msg) => {
//     try {
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'user', parts: [{ text: msg }] }
//       ]);

//       const genAI = new GoogleGenerativeAI("AIzaSyAcPxLmXULOQ6hlPRzc93WgVf2yOKQo1x8");
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const chat = model.startChat({
//         history: chatHistory,
//         generationConfig: {
//           maxOutputTokens: 100,
//         },
//       });
//       const result = await chat.sendMessage(msg);
//       const response = await result.response;
//       let text = await response.text();

//       // Check if the response is empty or null
//       if (!text || text.trim() === "") {
//         text = "I'm still learning. You can ask another question.";
//       }
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'model', parts: [{ text }] }
//       ]);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleSendMessage = () => {
//     if (inputText.trim() !== '') {
//       handleMessage(inputText.trim());
//       setInputText('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className='container'>
//       <div ref={chatContainerRef} className='chat-container'>
//         <div className='chat-history'>
//           {chatHistory.map((message, index) => (
//             <div key={index} className={`chat-message ${message.role}`}>
//               {message.parts && message.parts.length > 0 && message.parts[0].text}
//             </div>
//           ))}
//         </div>
//         <div className='input-container'>
//           <textarea
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Ask your question..."
//           />
//           <button onClick={handleSendMessage}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useRef, useEffect } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import './App.css';

// function App() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     // Scroll to the bottom of the chat container whenever chatHistory changes
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   const handleMessage = async (msg) => {
//     try {
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'user', parts: [{ text: msg }] }
//       ]);

//       const genAI = new GoogleGenerativeAI("AIzaSyAcPxLmXULOQ6hlPRzc93WgVf2yOKQo1x8");
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const chat = model.startChat({
//         history: chatHistory,
//         generationConfig: {
//           maxOutputTokens: 100,
//         },
//       });
//       const result = await chat.sendMessage(msg);
//       const response = await result.response;
//       let text = await response.text();

//       // Check if the response is empty or null
//       if (!text || text.trim() === "") {
//         text = "I'm still learning. You can ask another question.";
//       }
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'model', parts: [{ text }] }
//       ]);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleSendMessage = () => {
//     if (inputText.trim() !== '') {
//       handleMessage(inputText.trim());
//       setInputText('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className='container'>
//       <div className='chat-container'>
//         <div className='header'>
//           <img src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gemini Avatar" className="avatar" />
//           {/* <div className="model-name">Lets Justt Chats</div> */}
//           <div className="model-info">
//             <div className="model-name">Gemini Model</div>
//           </div>
//         </div>
//         <div ref={chatContainerRef} className='chat-history'>
//           {chatHistory.map((message, index) => (
//             <div key={index} className={`chat-message ${message.role}`}>
//               {message.parts && message.parts.length > 0 && message.parts[0].text}
//             </div>
//           ))}
//         </div>
//         <div className='footer'>
//           <textarea
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message..."
//           />
//           {/* <button onClick={handleSendMessage}>Send</button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useRef, useEffect } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import './App.css';

// function App() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const [isTalking, setIsTalking] = useState(false);
//   const [error, setError] = useState('');
//   const chatContainerRef = useRef(null);
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     if ('webkitSpeechRecognition' in window) {
//       const recognition = new window.webkitSpeechRecognition();
//       recognition.continuous = false;
//       recognition.interimResults = false;
//       recognition.lang = 'en-US';
//       recognition.onresult = (event) => {
//         const transcript = event.results[0][0].transcript;
//         console.log("Transcript:", transcript);
//         setInputText(transcript);
//         handleMessage(transcript);
//       };
//       recognition.onerror = (event) => {
//         console.error('Speech recognition error', event);
//         setError(`Speech recognition error: ${event.error}`);
//       };

//       recognitionRef.current = recognition;
//     } else {
//       setError('Speech recognition not supported in this browser.');
//     }
//   }, []);

//   const handleMessage = async (msg) => {
//     try {
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'user', parts: [{ text: msg }] }
//       ]);
//       const genAI = new GoogleGenerativeAI("AIzaSyAcPxLmXULOQ6hlPRzc93WgVf2yOKQo1x8");
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const chat = model.startChat({
//         history: chatHistory,
//         generationConfig: {
//           maxOutputTokens: 100,
//         },
//       });
//       const result = await chat.sendMessage(msg);
//       const response = await result.response;
//       let text = await response.text();
//       if (!text || text.trim() === "") {
//         text = "I'm still learning. You can ask another question.";
//       }
//       setChatHistory(prevHistory => [
//         ...prevHistory,
//         { role: 'model', parts: [{ text }] }
//       ]);
//       speakText(text);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   const handleSendMessage = () => {
//     if (inputText.trim() !== '') {
//       handleMessage(inputText.trim());
//       setInputText('');
//     }
//   };
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };
//   const speakText = (text) => {
//     if ('speechSynthesis' in window) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.onstart = () => setIsTalking(true);
//       utterance.onend = () => setIsTalking(false);
//       window.speechSynthesis.speak(utterance);
//     }
//   };
//   const startListening = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.start();
//     } else {
//       setError('Speech recognition not initialized.');
//     }
//   };
//   const testTalking = () => {
//     console.log("Test Talking button clicked");
//     setIsTalking(true);
//     setInputText("This is a test message.");
//     setTimeout(() => {
//       setIsTalking(false);
//       setInputText('');
//     }, 3000);
//   };


//   return (
//     <div className='container'>
//       <div className={`chat-container ${isTalking ? 'talking' : ''}`}>
//         <div className='header'>
//           <img src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gemini Avatar" className="avatar" />
//           <div className="model-info">
//             <div className="model-name">Gemini Model</div>
//           </div>
//         </div>
//         <div ref={chatContainerRef} className='chat-history'>
//           {chatHistory.map((message, index) => (
//             <div key={index} className={`chat-message ${message.role}`}>
//               {message.parts && message.parts.length > 0 && message.parts[0].text}
//             </div>
//           ))}
//         </div>
//         <div className='footer'>
//           <textarea
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message..."
//           />
//           <button onClick={startListening}>🎤</button>
//           <button onClick={testTalking}>Test Talking</button>
//           {isTalking && (
//             <div className="talking-indicator">
//               <div className="wave"></div>
//             </div>
//           )}
//           {isTalking && (
//             <div className="talking-message">{inputText}</div>
//           )}
//           {error && <div className="error">{error}</div>}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './App.css';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTalking, setIsTalking] = useState(false);
  const [error, setError] = useState('');
  const chatContainerRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Transcript:", transcript);
        setInputText(transcript);
        handleMessage(transcript);
      };
      recognition.onerror = (event) => {
        console.error('Speech recognition error', event);
        setError(`Speech recognition error: ${event.error}`);
      };

      recognitionRef.current = recognition;
    } else {
      setError('Speech recognition not supported in this browser.');
    }
  }, []);

  const handleMessage = async (msg) => {
    try {
      setChatHistory(prevHistory => [
        ...prevHistory,
        { role: 'user', parts: [{ text: msg }] }
      ]);
      const genAI = new GoogleGenerativeAI("AIzaSyAcPxLmXULOQ6hlPRzc93WgVf2yOKQo1x8");
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
          maxOutputTokens: 100,
        },
      });
      const result = await chat.sendMessage(msg);
      const response = await result.response;
      let text = await response.text();
      if (!text || text.trim() === "") {
        text = "I'm still learning. You can ask another question.";
      }
      setChatHistory(prevHistory => [
        ...prevHistory,
        { role: 'model', parts: [{ text }] }
      ]);
      speakText(text);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.onstart = () => setIsTalking(true);
      utterance.onend = () => setIsTalking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      handleMessage(inputText.trim());
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    } else {
      setError('Speech recognition not initialized.');
    }
  };

  const testTalking = () => {
    console.log("Test Talking button clicked");
    setIsTalking(true);
    setInputText("This is a test message.");
    setTimeout(() => {
      setIsTalking(false);
      setInputText('');
    }, 3000);
  };

  return (
    <div className='container'>
      <div className={`chat-container ${isTalking ? 'talking' : ''}`}>
        <div className='header'>
          <img src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gemini Avatar" className="avatar" />
          <div className="model-info">
            <div className="model-name">Gemini Model</div>
          </div>
        </div>
        <div ref={chatContainerRef} className='chat-history'>
          {chatHistory.map((message, index) => (
            <div key={index} className={`chat-message ${message.role}`}>
              {message.parts && message.parts.length > 0 && message.parts[0].text}
            </div>
          ))}
        </div>
        <div className='footer'>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
<button onClick={startListening} className="animated-button">🎤</button>
<button onClick={testTalking} className={`animated-button ${isTalking ? 'animated' : ''}`}>
          {isTalking && (
            <div className="talking-indicator">
              <div className="wave"></div>
            </div>
          )}
          {isTalking && (
            <div className="talking-message">{inputText}</div>
          )}
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
