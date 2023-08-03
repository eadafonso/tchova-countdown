import Countdown from "react-countdown";
import "./home.css";
import { useState } from "react";

export function HomeScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    // Aqui você pode realizar a lógica do envio do formulário ou outras ações necessárias
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <>
      <div className="homeContainer">
        <div className="homeContent">
          <aside className="leftContainer">
            <div className="logo-container">
              <img src="/tchova.png" alt="Logo" className="logo" />
            </div>
            {/* Uma pequena info sobre o Tchova */}
            <h1>
              Tchova <br /> Poupar para investir
            </h1>

            <p>Lançamento em:</p>

            <h2>
              <Countdown date={new Date("2023-08-10T00:00:00")} />
            </h2>
          </aside>
          <aside className="rightContainer">
            <h1>
              Subscreve para receber
              <br /> em primeira mão as novidades
            </h1>

            <form>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite o seu nome"
              />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o seu email"
              />
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Digite o seu número de telefone"
              />
              <button onClick={handleSubmit}>Enviar</button>
            </form>
          </aside>
        </div>
      </div>
    </>
  );
}
