import SecondBox from "../SecondBox";
import ImgData from "../../Data/ImgData";
const TripleBottomPartOfModal = ({ id }) => {
  return (
    <>
      <div>
        <div className="bottomOfModal">
          <SecondBox id={id} />
        </div>

        <div>
          <ImgData id={id + 1} />
          <div className="bottomOfModal">
            <SecondBox id={id + 1} />
          </div>
        </div>
        <div>
          <ImgData id={id + 2} />
          <div className="bottomOfModal">
            <SecondBox id={id + 2} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TripleBottomPartOfModal;
