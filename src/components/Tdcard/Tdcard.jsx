import React from 'react';
import cl from './Tdcard.module.css';
import editImage from '../../img/draw.png';
import deleteImage from '../../img/trash.png';
import Checklist from "../Checklist/Checklist";


const Tdcard = ({title, body}) => {
        //console.log(card)
        return (
        <div className={cl.card}>
            <div className={cl.card__header}>
                <p className={cl.card__period}>
                    Weekly
                </p>
                <div>
                    <button className={cl.card__button}>
                        <img className={cl.card__buttonImage} src={editImage} alt="Edit"/>
                    </button>
                    <button className={cl.card__button}>
                        <img className={cl.card__buttonImage} src={deleteImage} alt="Edit"/>
                    </button>
                </div>

            </div>
            <p className={cl.card__title}>{title}</p>
            <Checklist
                body={body}
            />
        </div>
    );
};

export default Tdcard;