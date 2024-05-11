import React, { useState } from "react";
import { ReactComponent as CopySvg } from "../assets/icons/copy.svg";
import DataForClipBoard from "./DataForClipBoard.json";
const CopyButtonWithData = (props) => {
  const [stateOfClicked, set] = useState(false);

  const handleCopyClick = () => {
    debugger;
    const selectedObject = DataForClipBoard.find((obj) => obj.id === props.id);
    if (selectedObject) {
      const textToCopy = selectedObject.text;
      navigator.clipboard.writeText(textToCopy);
    }
    set(!stateOfClicked);
  };
  return (
    <div
      onClick={handleCopyClick}
      className={`${stateOfClicked ? "animate__animated animate__heartBeat" : "animate__animated animate__rubberBand"}`}
    >
      <CopySvg />
    </div>
  );
};

export default CopyButtonWithData;
