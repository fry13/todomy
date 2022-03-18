import React from 'react';
import cl from './AddCardForm.module.css';

const AddCardForm = () => {
  return (
    <form className={cl.addCardForm}>
      <label className={cl.inputLabel}> Card title:
        <input maxLength={30} type="text" className={cl.input} />
      </label>
      <p className={cl.inputDescription}>(30 characters max.)</p>
      <button className={cl.submitButton}>Create</button>

    </form>
  );
};

export default AddCardForm;