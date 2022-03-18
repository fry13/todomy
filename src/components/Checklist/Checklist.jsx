import React, {useState} from 'react';
import cl from "./Checklist.module.css";
import ListItem from "../ListItem/ListItem";

const Checklist = ({body}) => {
    const [todos, setTodos] = useState(body);

    return (
        <ul className={cl.card__list}>
            {todos.map(todo =>

              <ListItem
                checked={todo.checked}
                descriprion={todo.description}
                key={todo.id}
              />
            )}
        </ul>
    );
};

export default Checklist;