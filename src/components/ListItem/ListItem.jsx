import cl from "./ListItem.module.css";
import React, {useState} from "react";

const ListItem = ({checked, descriprion}) => {

  const [isChecked, setChecked] = useState(checked)

  return (
    <li className={cl.card__item}>
      <input
        className={cl.card__check}
        checked={isChecked}
        onChange={evt => {setChecked(evt.target.checked);}}
        type="checkbox"
      />
      <p className={cl.card__itemText}>{descriprion}</p>
    </li>
  );
};

export default ListItem;