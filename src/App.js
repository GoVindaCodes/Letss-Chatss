// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
// import from "App.css";
import "./App.css";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputText, setInputText] = useState('');

  // useEffect(() => {
  //   const fetchChatHistory = async () => {
  //     try {
  //       const genAI = new GoogleGenerativeAI("AIzaSyAcPxLmXULOQ6hlPRzc93WgVf2yOKQo1x8"); // Replace with your API key
  //       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  //       const history = await model.getHistory();
  //       const formattedHistory = history.map(message => ({
  //         role: message.role,
  //         parts: [{ text: message.text }]
  //       }));
  //       setChatHistory(formattedHistory);
  //     } catch (error) {
  //       console.error("Error fetching chat history:", error);
  //     }
  //   };

  //   fetchChatHistory();
  // }, []);

  const handleMessage = async (msg) => {
    console.log("handleMessage called with message:", msg);
    try {
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
      const text = response.text();
      setChatHistory(prevHistory => {
        console.log("Previous chat history:", prevHistory);

        return [
          ...prevHistory,
          { role: 'user', parts: [{ text: msg }] },
          { role: 'model', parts: [{ text }] }
        ]
      });
    } catch (error) {
      console.error("Error:", error);
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
      // e.preventDefault();
      e.preventDefault(); // Prevent default behavior of Enter key press
      handleSendMessage();
    }
  };

  return (
    // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundurl: '#f3f4f6' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundImage: 'url("https://images.unsplash.com/photo-1710610383283-37ecdf156c60?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='hi'>

      <div style={{ backgroundColor: 'rgba(155, 152, 155, 0.6)', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '900px', height: '500px', overflowY: 'auto', padding: "16px", marginTop: "50px" }}>
        <div style={{ textAlign: 'center', color: '#yellow', fontSize: '24px', marginBottom: '20px' }}>
          Let's chat!
        </div>
        {chatHistory.map((message, index) => (
          <div key={index} style={{ padding: '8px', borderRadius: '8px', marginBottom: '4px', alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start', backgroundColor: message.role === 'user' ? 'rgba(190, 231, 253, 0.7)' : 'rgba(243, 244, 246, 0.9)' }}>
            {message.parts && message.parts.length > 0 && message.parts[0].text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ resize: 'none', width: '900px', height: '50px', border: '1px solid #cbd5e0', borderRadius: '8px', padding: '8px', outline: 'none', marginRight: '8px', backgroundColor: 'rgba(255, 252, 255, 0.6)' }}
          placeholder="Ask your question..."
        />

        {/* <button
          onClick={handleSendMessage}
          style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', cursor: 'pointer' }}
        >
          Send
        </button> */}
      </div>
    </div >
  );
}

export default App;
