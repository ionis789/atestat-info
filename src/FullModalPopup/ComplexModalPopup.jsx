import UpPartOfModal from "./UpPartOfModal";
import BottomPartOfModal from "./BottomPartOfModal";
import { useState } from "react";
import { ReactComponent as DownBtn } from "../assets/icons/chevron-down.svg";
import { ReactComponent as Cppbtnnn} from "../assets/icons/chevron-up.svg";
import ApeareanceAfterClick from "./ApeareanceAfterClick";
const ModalPopup = ({ id, name, children }) => {
  //functionalitatea de deschidere si inchidere a popup-ului in momentul apasari pe modalpopup
  // M - Modal
  //Dd - DropDownMenu
  const [stateOfM, setStateOfM] = useState(false);
  const openModal = () => {
    setStateOfM(true);
  };
  const closeModal = () => {
    setStateOfM(false);
  };

  const [stateOfDd, setStateOfDd] = useState(false);
  const handleStateOfDd = () => {
    setStateOfDd(!stateOfDd);
  };

  return (
    <>
      <div className="copil">
        <div className="DropModalMenu">
          <div className="complexmodalbtn">
            <div className="flex justify-between">
              <div className={`complexmodalName ${stateOfM ? 'animate__animated animate__heartBeat mycolorblue' : ''}`}
                   onClick={openModal}>
                {name}
              </div>
              {
                !stateOfDd ?
                    <div className="downdiv">
                      <DownBtn onClick={handleStateOfDd}/>
                    </div>
                    :
                    <div className="downdiv">
                      <Cppbtnnn onClick={handleStateOfDd}/>
                    </div>
              }
            </div>

          </div>

          {/*aici este dropdownul menu stocat in children*/}
          {stateOfDd && <>{children}</>}
        </div>
      </div>
      {stateOfM && (


          <ApeareanceAfterClick id={id} name={name} closeModal={closeModal}/>
      )}
    </>
  );
};
export default ModalPopup;
