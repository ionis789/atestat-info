import React from 'react';
import TripleBottomPartOfModal from "./TripleBottomPartOfModal";
import UpPartOfModal from "../UpPartOfModal";
const ApeareanceAfterClick = (props) => {
    return (
        <div className="modalOverlay animate__animated animate__zoomInDown">
            <UpPartOfModal
                id={props.id}
                name={props.name}
                closeModal={props.closeModal}
            ></UpPartOfModal>
            <TripleBottomPartOfModal id={props.id}/>
        </div>
    );
};

export default ApeareanceAfterClick;