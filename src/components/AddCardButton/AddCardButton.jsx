import React from 'react';
import cl from './AddCardButton.module.css';

const AddCardButton = () => {
    return (
        <div className={cl.wrapper}>
            <button className={cl.button}>
                +
            </button>
        </div>
    );
};

export default AddCardButton;