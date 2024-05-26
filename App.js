import './App.css';
import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [speaking, setSpeaking] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      setSpeaking(true);
    } else {
      alert('Извините, ваш браузер не поддерживает синтез речи.');
    }
  };

  const handleStopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Please write the text...</h1>
      </header>
      <input
        type="text"
        placeholder="Write something"
        value={text}
        onChange={handleTextChange}
      />
      {speaking ? (
        <button onClick={handleStopSpeaking}>Остановить</button>
      ) : (
        <button onClick={handleSpeak}>
          ▶️ Play
        </button>
      )}
    </div>
  );
};

function App() {
  return (
    <>
      <TextToSpeech />
    </>
  );
}

export default App;
