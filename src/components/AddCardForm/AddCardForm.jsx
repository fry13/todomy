import React, {useRef, useState} from 'react';
import cl from './AddCardForm.module.css';

const AddCardForm = ({create}) => {
  const [card, setCard] = useState({title: '', body: []})

  const addNewCard = (evt) => {
    evt.preventDefault()
    const newCard = {...card, id: Date.now()}
    create(newCard)
    setCard({title: '', body: []})
    console.log(newCard)
  }


  return (
    <form  className={cl.addCardForm}>
      <label className={cl.inputLabel}> Card title:
        <input
          required
          value={card.title}
          onChange={evt => setCard({...card, title: evt.target.value})}
          minLength={3}
          maxLength={30}
          type="text"
          className={cl.input}
        />
      </label>
      <p className={cl.inputDescription}>(30 characters max.)</p>
      <button type="submit" onClick={addNewCard} className={cl.submitButton}>Create</button>
    </form>
  );
};

export default AddCardForm;