import React from "react";
import Header from "../../components/header/header.js";
import "./styles.css";
import Footer from "../../components/footer/Footer";

const Comentarios = () => {
  const testimonials = [
    {
      id: 1,
      user: {
        name: "Neymar",
        photo:
          "https://avatars.mds.yandex.net/i?id=953876698f1eb6f6759f56f3eb43cfc3-4460401-images-thumbs&n=13",
      },
      comment:
        "Aquaman 2 é uma emocionante continuação repleta de ação e aventura. Os efeitos visuais são deslumbrantes e a história consegue prender a atenção do início ao fim. Definitivamente, um filme imperdível para os fãs de super-heróis!",
    },
    {
      id: 2,
      user: {
        name: "Will Smith",
        photo:
          "https://i.pinimg.com/originals/5f/7d/c7/5f7dc784c21606788ad921076b825be6.jpg",
      },
      comment:
        "I loved the underwater scenes and the action sequences. Jason Momoa was perfect for the role of Aquaman.",
    },
    {
      id: 3,
      user: {
        name: "Scarlett Johansson",
        photo:
          "https://avatars.mds.yandex.net/i?id=d7a6678b98a57fafc366eca3810062bb-4570996-images-thumbs&n=13",
      },
      comment:
        "Aquaman 2 supera as expectativas, entregando uma trama envolvente e cheia de reviravoltas. Os personagens são bem desenvolvidos e as cenas subaquáticas são simplesmente incríveis. Jason Momoa novamente dá um show como o herói aquático.",
    },
    {
      id: 4,
      user: {
        name: "Amber Heard",
        photo:
          "https://i1.sndcdn.com/artworks-000478341516-aqme7l-t500x500.jpg",
      },
      comment:
        "Foi Otimo realizar o filme, há varias cenas que foi preciso  de vários takes, mas no final foi otimo voces vão adorar o filme!",
    },
    {
      id: 5,
      user: {
        name: "Barack Obama",
        photo:
          "https://i1.sndcdn.com/artworks-000075116116-6tdvx7-t500x500.jpg",
      },
      comment:
        "With Aquaman 2, James Wan delivers another success for the franchise. The direction is skillful, perfectly combining stunning visual effects with a captivating story. Jason Momoa continues to be the heart of the film, bringing charisma and charm to the character.",
    },
    {
      id: 6,
      user: {
        name: "Cristiano Ronaldo",
        photo:
          "https://i.pinimg.com/736x/41/93/f5/4193f55f43deacb949ec10bf729beff1.jpg",
      },
      comment:
        "The acting was top-notch and the cinematography was stunning. I can't wait for the sequel!",
    },
    {
      id: 7,
      user: {
        name: "Lebron James",
        photo: "https://i1.sndcdn.com/avatars-000363081704-uizwfo-t500x500.jpg",
      },
      comment:
        "Aquaman 2 is a rollercoaster of emotions. The plot touches on family issues, loyalty and the search for acceptance. The battle scenes are grand and exciting, and the soundtrack perfectly complements the film's epic atmosphere.",
    },
    {
      id: 8,
      user: {
        name: "Anitta",
        photo:
          "https://cdn.justjared.com/wp-content/uploads/headlines/2023/09/anitta5.jpg",
      },
      comment:
        "Com Aquaman 2, o universo cinematográfico da DC ganha ainda mais profundidade e brilho. A história expande o mundo submarino e apresenta novos desafios para o protagonista. É uma experiência visual deslumbrante, com sequências de ação de tirar o fôlego.",
    },
    {
      id: 9,
      user: {
        name: "Gisele Bundchen",
        photo:
          "https://www.shefinds.com/files/2020/03/shutterstock_183448859.jpg",
      },
      comment:
        "Aquaman 2 é um filme que equilibra perfeitamente ação, humor e emoção. A química entre o elenco é palpável, e Amber Heard como Mera traz uma energia incrível para o filme. Prepare-se para se surpreender com as cenas submarinas e a mitologia envolvente.",
    },
    {
      id: 10,
      user: {
        name: "Jamie Foxx",
        photo:
          "https://i1.sndcdn.com/artworks-000500915562-xpc61z-t500x500.jpg",
      },
      comment:
        "With Aquaman 2, James Wan delivers another success for the franchise. The direction is skillful, perfectly combining stunning visual effects with a captivating story. Jason Momoa continues to be the heart of the film, bringing charisma and charm to the character.",
    },
    // Add more testimonials here...
  ];

  return (
    <>
      <Header />
      <div className="cont-comentario">
        <div className="testimonials-container">
          <h2 className="testimonials-title">Comentarios sobre Aquaman 2</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <img
                  src={testimonial.user.photo}
                  alt={testimonial.user.name}
                  className="testimonial-photo"
                />
                <p className="testimonial-user-name">{testimonial.user.name}</p>
                <p className="testimonial-comment">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer-coment">
        <p>
          &copy; {new Date().getFullYear()} Roger Designer. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
};

export default Comentarios;
