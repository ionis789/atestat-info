import "../GlobalStyles/FullModalPopup.css";
import UpPartOfModal from "./UpPartOfModal";
import BottomPartOfModal from "./BottomPartOfModal";
import { useState } from "react";
import ApeareanceAfterClick from "./ApeareanceAfterClick";
const  ModalPopup = ({ id, name }) => {
  //functionalitatea de deschidere si inchidere a popup-ului in momentul apasari pe modalpopup
  // M - Modal
  const [stateOfM, setStateOfM] = useState(false);
  const openModal = () => {
    setStateOfM(true);
  };
  const closeModal = () => {
    setStateOfM(false);
  };

  return (
    <>

      <div className="dropbtn"

           onClick={openModal}>
        <div className={`modalName ${stateOfM ? 'animate__animated animate__heartBeat mycolorblue' : ''}`}  onClick={openModal}>
          {name}
        </div>
      </div>

      {stateOfM && (
          <ApeareanceAfterClick id={id} name={name} closeModal={closeModal}/>
      )}
    </>
  );
};
export default ModalPopup;
