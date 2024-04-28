import "../../GlobalStyles/FullModalPopup.css";
import { useState } from "react";
import ApeareanceAfterClickForTripleModal from "./ApeareanceAfterClickForTripleModal";
const ModalPopup = ({ id, name }) => {
  //functionalitatea de deschidere si inchidere a popup-ului in momentul apasari pe modalpopup
  // M - Modal
  const [stateOfM, setStateOfM] = useState(false);
  const handleStateOfM = () => {
    setStateOfM(!stateOfM);
  };
  return (
    <div className={"copil"}>
      <div className="modalbtn" onClick={handleStateOfM}>
        <div
          className={`modalName ${
            stateOfM ? "animate__animated animate__heartBeat mycolorblue" : ""
          }`}
        >
          {name} {/*Aici este numele anume la btn nu modal*/}
        </div>
      </div>

      {stateOfM && (
        <ApeareanceAfterClickForTripleModal
          id={id}
          name={name}
          closeModal={handleStateOfM}
        />
      )}
    </div>
  );
};
export default ModalPopup;
