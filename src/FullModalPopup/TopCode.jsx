import { ReactComponent as Cppbtn } from "../assets/icons/c-plus-plus.svg";
import CopyButtonWithData from "../Data/CopyButton";
const TopCode = (props) => {
  return (
    <div className={"topCode"}>
      <Cppbtn/>
      <CopyButtonWithData id={props.id} />
    </div>
  );
};
export default TopCode;
