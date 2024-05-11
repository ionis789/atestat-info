import TripleModalPopup from "../FullModalPopup/TripleModal /TripleModalPopup";

const SubiecteBacPage = () => {
  return (
    <>
      <main>
        <p className="myh1">Subiecte Bac 2024-2021</p> <br />
        <p className="myIntro">
          Acest articol contine exercitiile(Rezolvate) de la subiectul III date
          la Bacalaureat, profil mate-info.
        </p>
        <br /> <br />
        <p className="myh1 mt-8">&bull; Bac 2024</p>
        <div className="parinte">
          <TripleModalPopup
            id={104}
            name="Simulare – 6 martie 2024"
          ></TripleModalPopup>
          <TripleModalPopup
            id={101}
            name="Model de subiect – noiembrie 2023"
          ></TripleModalPopup>
        </div>
        <p className="myh1 mt-8">&bull; Bac 2023</p>
        <div className="parinte">
          <TripleModalPopup
            id={107}
            name="Sesiunea august – 18 august 2023"
          ></TripleModalPopup>
          <TripleModalPopup
            id={110}
            name="Sesiunea iunie-iulie – 28 iunie 2023"
          ></TripleModalPopup>
          <TripleModalPopup
            id={113}
            name="Sesiunea specială – mai 2023"
          ></TripleModalPopup>
          <TripleModalPopup
            id={116}
            name="Sesiunea iunie-iulie – 28 iunie 2023"
          ></TripleModalPopup>
          <TripleModalPopup
            id={119}
            name="Simulare – 29 martie 2023"
          ></TripleModalPopup>
          <TripleModalPopup
            id={122}
            name="Modele de subiecte – noiembrie 2022"
          ></TripleModalPopup>
        </div>
        <p className="myh1 mt-8">&bull; Bac 2022</p>
        <div className="parinte">
          <TripleModalPopup
            id={125}
            name="Sesiunea august-septembrie – 18 august 2022"
          ></TripleModalPopup>
          <TripleModalPopup
            id={128}
            name="Sesiunea iunie – 22 iunie 2022"
          ></TripleModalPopup>
          <TripleModalPopup
            id={131}
            name="Sesiunea specială – 20 mai 2022"
          ></TripleModalPopup>
          <TripleModalPopup
            id={134}
            name="Simulare – 30 martie 2022"
          ></TripleModalPopup>
        </div>
        <p className="myh1 mt-8">&bull; Bac 2021</p>
        <div className="parinte">
          <TripleModalPopup
            id={137}
            name="Sesiunea august-septembrie 2021 – 18 august 2021"
          ></TripleModalPopup>
          <TripleModalPopup
            id={140}
            name="Sesiunea iunie-iulie 2021 – 30 iunie 2021"
          ></TripleModalPopup>
          <TripleModalPopup
            id={143}
            name="Sesiunea specială – 20 mai 2021"
          ></TripleModalPopup>
          <TripleModalPopup
            id={146}
            name="Simulare – 24 martie 2021"
          ></TripleModalPopup>
        </div>
      </main>
    </>
  );
};
export default SubiecteBacPage;
