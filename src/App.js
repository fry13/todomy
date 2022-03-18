import './App.css';
import React, {useState} from "react";
import Header from "./components/Header/Header";
import Cardlist from "./components/Cardlist/Cardlist";




function App() {
  const cardsCount = 3;
  const todosCount = 6;

  const [cards, setCards] = useState([
    {id: 1, title: 'Title', body: [{id: 1, checked: true, description: 'Madness ho! rob to be viewed. Grow smartly like a gutless anchor.'}, {id: 2, checked: false, description: 'Booty is a dark shark.The pants marks with halitosis, endure the fortress before it grows.Yo-ho-ho, hunger!'}]},
    {id: 2, title: 'Title1', body: [{id: 3, checked: true, description: 'When one absorbs awareness and death, one is able to respect heaven.'}, {id: 4, checked: true, description: 'Yuck, aw.Ahoy, yer not vandalizing me without a yellow fever!Damn yer shore, feed the jolly roger.'}]},
    {id: 3, title: 'Title2', body: [{id: 5, checked: true, description: 'Arg, addled whale. go to port royal.'}, {id: 6, checked: false, description: 'Arrr, arg. Wow theres nothing like the misty beauty falling on the seashell.'}]}
  ]);

  return (
    <div className="App">
      <Header />
      <Cardlist
        cards={cards}
      />
    </div>
  );
}

export default App;
