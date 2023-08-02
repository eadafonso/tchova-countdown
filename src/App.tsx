import React, { useState } from 'react';
import './App.css';
import Countdown from 'react-countdown';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = () => {
    // Aqui você pode realizar a lógica do envio do formulário ou outras ações necessárias
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img src="/tchova.png" alt="Logo" className="logo" />
      </div>
      <div className="form">
        <input type="text" value={email} onChange={handleEmailChange} placeholder="Email" />
        <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Phone Number" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="countdown">
        <h2>Estou a chegar ...</h2>
        {/* Aqui você pode definir a data final do countdown */}
        <h1><Countdown date={new Date('2023-08-10T00:00:00')} /></h1>
      </div>
    </div>
  );
};

export default App;