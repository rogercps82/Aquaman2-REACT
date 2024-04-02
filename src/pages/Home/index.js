import React, { lazy, Suspense, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import "./styles.css";
import videoaqua from "../../assets/Aquaman2.mp4";
import Cards from "../../components/cards";

function Home() {
  return (
    <>
      <Header />
      <div id="banner"></div>
      <div id="trailer-container">
        <div className="content">
          <video controls className="trailer">
            <source src={videoaqua} />
            Seu navegador nao possui suporte para video
          </video>
          <div id="sinopse">
            <p className="description">
              Aquaman 2 é a sequência do filme Aquaman de 2018, que acompanha
              Arthur Curry (Jason Momoa), o filho do humano Tom Curry (Temuera
              Morrison) com a atlante Atlanna (Nicole Kidman). Ele cresce com a
              vivência de um humano e as capacidades metahumanas de um atlante.
              Nesta sequência, depois de não conseguir derrotar o rei dos mares
              pela primeira vez, Arraia Negra (Yahya Abdul-Mateen II) utiliza o
              poder do mítico Tridente Negro para liberar uma força antiga e
              maligna. Na tentativa de proteger Atlântida e o resto do mundo,
              Aquaman deve forjar uma aliança incômoda com um aliado improvável
              e deixar as diferenças de lado para evitar uma devastação
              irreversível.
            </p>
            <button className="button">Comprar Ingresso</button>
          </div>
        </div>
      </div>

      <Cards />
      <Footer />
    </>
  );
}
export default Home;
