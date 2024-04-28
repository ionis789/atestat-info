import MenuOfModal from "./MenuOfModal";
import ImgData from "../Data/ImgData";
const UpPartOfModal = ({ name, children, id, closeModal }) => {
  return (
    <>
      <div className="upOfModal">
        <MenuOfModal name={name} closeModal={closeModal} />
        <ImgData id={id} />
      </div>
    </>
  );
};
export default UpPartOfModal;
