import TopCode from "./TopCode";
import CodeData from "../Data/CodeData";
const SecondBox = (props) => {
  return (
    <div className="secondBox">
      <TopCode id={props.id} />
      <CodeData id={props.id} />
    </div>
  );
};
export default SecondBox;
