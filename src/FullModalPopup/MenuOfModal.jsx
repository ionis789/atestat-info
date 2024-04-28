import { ReactComponent as Closebtn } from "../assets/icons/close.svg";
import "../GlobalStyles/FullModalPopup.css";
const MenuOfModal = ({ name, closeModal }) => {
  return (
    <>
      <div className="menuOfModal">
        <div className="myh1WithBackround">{name}</div>
        <div className="closebtn">
          <Closebtn onClick={closeModal}/>
        </div>
      </div>
    </>
  );
};
export default MenuOfModal;
