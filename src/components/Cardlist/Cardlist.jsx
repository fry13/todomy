import React from 'react';
import Tdcard from "../Tdcard/Tdcard";
import cl from "./Cardlist.module.css";



const Cardlist = ({remove, cards, children}) => {

  const addNewCard =() => {

  }

    return (
        <div className={cl.cardlist}>
            {cards.map(card =>
                <Tdcard
                    remove={remove}
                    card={card}
                    title={card.title}
                    body={card.body}
                    key={card.id}
                />
            )}
          {children}

        </div>
    );
};

export default Cardlist;