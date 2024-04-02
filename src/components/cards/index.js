import React, { useState } from "react";
import "./styles.css";

const actors = [
  {
    name: "Amber Heard",
    image: "https://uznayvse.ru/person/amber-heard/amber-heard04.jpg",
    info: "Amber Heard é uma atriz norte-americana conhecida por seus papéis em Aquaman, A Garota Dinamarquesa e Quebrando Regras. Nascida em Austin, no Texas, seu pai trabalha com cavalos e a ensinou a cavalgar, caçar e pescar. Durante a infância e adolescência, ela participou de concursos de beleza, mas hoje se posiciona contra a objeticação que essas competições disseminam. Com 16 anos, decidiu deixar o colégio católico onde estudava e tentar a carreira como atriz em Hollywood. Seus primeiros trabalhos profissionais, tanto no cinema quanto na televisão, aconteceram em 2004. Na tela grande, Amber teve um papel coadjuvante no drama esportivo Tudo Pela Vitória com Billy Bob Thornton. Na televisão, ela participou do episódio piloto do drama Jack and Bobby com Logan Lerman. No ano seguinte, ela interpretou a versão mais nova de Charlize Theron em Terra Fria e fez participações em The O.C e Criminal Minds. Seu primeiro papel de protagonismo veio no filme de terror Tudo Por Ela como Mandy Lane, uma jovem excluída que se torna popular. Amber ainda teve papéis de destaque nos filmes Quebrando Regras e Segurando as Pontas. Em 2011, ela voltou para TV como a protagonista da série Playboy Club, um drama de época sobre as casas norturnas comandadas pela revista Playboy..",
  },
  {
    name: "Patrick Joseph Wilson",
    image:
      "https://marriedwiki.com/uploads/2018/09/patrick-wilson-net-worth-custom.jpg",
    info: "Patrick Joseph Wilson é um ator e cantor estadunidense. Ele começou sua carreira em 1995 estrelando musicais da Broadway. Em 2003, estrelou a aclamada minissérie da HBO Angels in America. Atuou em The Alamo, The Phantom of the Opera, Hard Candy, Little Children, Watchmen e The A-Team. Wilson também ficou bastante conhecido por seus papéis em duas grandes franquias de terror: Josh Lambert em Insidious e Insidious: Chapter 2, e Ed Warren no Universo The Conjuring. Por suas frequentes aparições no gênero, ganhou a reputação de rei do grito Na televisão, ele estrelou a série da CBS A Gifted Man e a segunda temporada da aclamada série do FX Fargo,No Universo Estendido DC, ele deu voz ao Presidente dos Estados Unidos em Batman v Superman, Dawn of Justice e interpretou o Mestre do Oceano no filme de super_herói Aquaman.",
  },
  {
    name: "Joseph Jason Namakaeha Momoa",
    image: "https://zoomboola.com/person/momoa/jason_momoa04.jpg",
    info: "Joseph Jason Namakaeha Momoa ou apenas Jason Momoa, é um ator e cineasta americano. Sua estreia como ator foi na série de ação Baywatch: Hawaii (1999–2001), após ser descoberto pelos designers Eric Chandler e Takeo Kobayashi, que o incentivaram a seguir carreira como modelo. Ele nasceu no Havaí e tem descendência do povo Pawnee, apesar de ter crescido em Norwalk no estado de Iowa. Após sua estreia na TV em Baywatch, Jason Momoa também estrelou a série de ficção científica Stargate Atlantis (2005–2009), como o personagem Ronon Dex, e se destacou com o papel de Khal Drogo nas duas primeiras temporadas da série de fantasia Game of Thrones (2011–2012). Após o sucesso de Game of Thrones, ele ainda protagonizou duas séries dramáticas: Frontier (2016–2018), do Discovery Channel, e See (2019), uma produção original da Apple TV+.",
  },
  {
    name: "Yahya Abdul-Mateen II",
    image:
      "https://www.emmys.com/sites/default/files/bios/Abdul-Mateen-Yahya-450x600.jpg",
    info: "Yahya Abdul-Mateen II nasceu em New Orleans, Louisiana, sendo filho de um pai muçulmano e uma mãe cristã. Ele passou parte de sua infância no projeto de moradia popular Magnolia Projects, se mudando, depois, para Oakland, na Calinfórnia onde estudou na McClymonds High School Ele se formou em arquitetura pela University of California, em Berkeley, e depois trabalhou como arquiteto urbanista em San Francisco. Enquanto ainda estudava, se tornou membro da fraternidade Alpha Phi Alpha e competiu como atleta de corrida de obstáculos pelos California Golden Bears. Abdul-Mateen II afirmou que sempre quis ser ator, recebendo, mais tarde, o título de Mestre em Belas Artes pela Yale School of Drama.",
  },
];

function Cards() {
  const [selectedActor, setSelectedActor] = useState(null);
  return (
    <>
      <h1 className="title-ator">Atores Principais</h1>

      <div className="actor-grid">
        {actors.map((actor, index) => (
          <div
            key={index}
            className="actor-image"
            onClick={() => setSelectedActor(actor)}
          >
            <img src={actor.image} alt={actor.name} />
          </div>
        ))}
      </div>
      {selectedActor && (
        <div className="actor-card">
          <button
            className="close-button"
            onClick={() => setSelectedActor(null)}
          >
            Close
          </button>
          <h2>{selectedActor.name}</h2>
          <p>{selectedActor.info}</p>
        </div>
      )}
    </>
  );
}

export default Cards;
