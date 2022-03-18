import React from 'react';
import Tdcard from "../Tdcard/Tdcard";
import cl from "./Cardlist.module.css";
import AddCardButton from "../AddCardButton/AddCardButton";
import AddCardForm from "../AddCardForm/AddCardForm";



const Cardlist = ({cards}) => {

  const addNewCard =() => {

  }

    return (
        <div className={cl.cardlist}>
            {cards.map(card =>
                <Tdcard
                    card={card}
                    title={card.title}
                    body={card.body}
                    key={card.id}
                />
            )}
        <div>
          <AddCardButton onClick={addNewCard} />
          <AddCardForm />
        </div>

        </div>
    );
};

export default Cardlist;