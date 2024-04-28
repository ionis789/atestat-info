import React from 'react';
import UpPartOfModal from "./UpPartOfModal";
import BottomPartOfModal from "./BottomPartOfModal";
const ApeareanceAfterClick = ({id, name, closeModal}) => {
    return (
        <div className="modalOverlay animate__animated animate__zoomInDown">
            <UpPartOfModal id={id} name={name} closeModal={closeModal}/>
            <BottomPartOfModal id={id}/>
        </div>
    );
};

export default ApeareanceAfterClick;