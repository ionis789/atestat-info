import "./Home.css";
import "../GlobalStyles/Common.css";
import BottomPartOfModal from "../FullModalPopup/BottomPartOfModal";
const HomePage = () => {
  return (
    <>
      <main>
        <div className="test">
          <div className={"mb-5"}>
            <p className="myIntro">
              <h1 className="myh1">Proiect Atestat</h1>
              Realizat în cadru Colegiului National de Informatică de către
              Socol Ion, clasa a XII-a E, sub coordonarea profesorului Blaga
              Gabriela.
            </p>
          </div>
          <div className="allBoxes">
            <div className="firstBox">
              <p className="myh1">Scopul Site-ului</p>
              <p className="myIntro">
                &bull; Acest site, este dedicat în special pregătirii pentru
                bacalaureat la informatică! <br />
                &bull; Aici vei găsi resurse care te vor ajuta să
                înveti/recapitulezi pentru examen. Trebuie să știi că, uneori,
                pot exista lipsuri sau greșeli în informatii. <br />
                &bull; Dacă ai sugestii, te rog să dai un feedback la{" "}
                <span className={"underline"}>
                  recapitulareInfoBac@gmail.com.
                </span>
              </p>
            </div>
            <BottomPartOfModal id={0} />
          </div>
        </div>
      </main>
      <div className="mai2024">
        <h1 className="myh1">Mai 2024</h1>
      </div>
    </>
  );
};
export default HomePage;
