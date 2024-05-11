import React from "react";
import DataForCode from "./DataForCode.json";
import { convertor } from "../Convertor/convertor";

const CodeData = (props) => {
  convertor(props.id);
  return (
    <>
      {DataForCode.map((item) =>
        props.id === item.id ? (
          <div
            key={item.id}
            className="codeArea"
            dangerouslySetInnerHTML={{ __html: item.text }}
          ></div>
        ) : null,
      )}
    </>
  );
};
export default CodeData;
/*
 * Home *
 * 0 - Primul "Program Hello World!"
 * Atestat *
 * 1 -> 99 - (Nr la probleme corespunde cu nr la id)
 * Subiecte Bac *
 * 100 -> 199 - Subiecte Bac (In ordine de sus in jos, de la st la dr, se apeleaza un singur id in ComplexModalPopup care dupa cere inca doua si in total 3 fiindca am 3 exercitii la sub III)
 */
