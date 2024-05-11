import React from "react";
import { convertor } from "../Convertor/convertor";

const CodeData = (props) => {
  const formatedText = convertor(props.id);
  return (
    <div
      key={props.id}
      className="codeArea"
      dangerouslySetInnerHTML={{ __html: formatedText }}
    ></div>
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
