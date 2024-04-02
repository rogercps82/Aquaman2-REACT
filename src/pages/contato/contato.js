import React, { useState } from "react";
import Header from "../../components/header/header.js";
import "./styles.css";
import Footer from "../../components/footer/Footer";
function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    setMessageSent(true);
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setMessageSent(false);
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1>Fale Conosco</h1>
        <p>
          Sinta-se à vontade para entrar em contato conosco caso tenha dúvidas
          ou comentários.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <div className="button-container">
            <button type="submit">Send</button>
            <button type="button" onClick={handleClear}>
              Limpar Dados
            </button>
          </div>
        </form>
        {messageSent && <p>Message sent!</p>}
      </div>
      <footer className="footer-contato">
        <p>
          &copy; {new Date().getFullYear()} Roger Designer. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}

export default Contato;
