import { useState, useEffect } from "react";
import Header from "../../components/header/header.js";
import "./styles.css";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/footer/Footer";
import { EffectFade, EffectFlip, EffectCoverflow } from "swiper/modules";
register();

function Fotos() {
  const [slidePerview, setSlidePerview] = useState(1);
  const data = [
    {
      id: "1",
      image:
        "https://catracalivre.com.br/wp-content/uploads/2024/02/fotos-catraca-18.png",
    },
    {
      id: "2",
      image:
        "https://content.api.news/v3/images/bin/1dec095c82bcd3ad0623fbda08eb0c0e",
    },
    {
      id: "3",
      image:
        "https://nypost.com/wp-content/uploads/sites/2/2022/04/amber-heard-aquaman-1.jpg",
    },
    {
      id: "4",
      image:
        "https://w.forfun.com/fetch/66/66c26835698a2c852ebca545c0b0f466.jpeg",
    },
    {
      id: "5",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/0d/2023/12/20/aquaman-2-o-reino-perdido-ja-esta-em-cartaz-nos-cinemas-1703110080268_v2_4x3.jpg",
    },
    {
      id: "6",
      image:
        "https://www.otempo.com.br/image/contentid/policy:1.3297382:1703030716/image.jpg?f=3x2&q=0.6&w=600&$p$f$q$w=4a9d91e",
    },
    {
      id: "7",
      image:
        "https://claudia.abril.com.br/wp-content/uploads/2023/12/aquaman-2-critica.jpg?quality=85&strip=info",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidePerview(1);
      } else {
        setSlidePerview(1);
      }
    }
    handleResize(0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="conttainer">
        <Header />
        <div className="cont">
          <h1 className="titulo">Carrossel de fotos</h1>
          <Swiper
            className="mySwiper"
            modules={[EffectFade]}
            effect="fade"
            slidesPerView={slidePerview}
            pagination={{ clickable: true }}
            navigation={true}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt="Slider"
                  className="slider-item"
                ></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <footer className="footer-fotos">
        <p>
          &copy; {new Date().getFullYear()} Roger Designer. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}

export default Fotos;
