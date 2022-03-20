import './App.css';
import React, {useState} from "react";
import Header from "./components/Header/Header";
import Cardlist from "./components/Cardlist/Cardlist";
import AddCardButton from "./components/AddCardButton/AddCardButton";
import AddCardForm from "./components/AddCardForm/AddCardForm";


function App() {

  const createCard = (newCard) => {
    setCards([...cards, newCard])
    console.log(newCard)
  }

  const removeCard = (card) => {
    setCards(cards.filter(c => c.id !== card.id))
  }

  const [cards, setCards] = useState([
    {id: 1,
      title: 'Title',
      body: [
        {id: 1, checked: true, description: 'Madness ho! rob to be viewed. Grow smartly like a gutless anchor.'},
        {id: 2, checked: false, description: 'Booty is a dark shark.The pants marks with halitosis, endure the fortress before it grows.Yo-ho-ho, hunger!'}
        ]
    },
    {id: 2,
      title: 'Title1',
      body: [
        {id: 3, checked: true, description: 'When one absorbs awareness and death, one is able to respect heaven.'},
        {id: 4, checked: true, description: 'Yuck, aw.Ahoy, yer not vandalizing me without a yellow fever!Damn yer shore, feed the jolly roger.'}
        ]
    },
    {id: 3,
      title: 'Title2',
      body: [
        {id: 5, checked: true, description: 'Arg, addled whale. go to port royal.'},
        {id: 6, checked: false, description: 'Arrr, arg. Wow theres nothing like the misty beauty falling on the seashell.'},
        {id: 7, checked: false, description: 'The pegleg fires with beauty, fear the brig before it sings. MADNESS.Gar, heavy-hearted gold. you wont taste the lighthouse.'},
        {id: 8, checked: false, description: 'The dubloon vandalizes with yellow fever, fire the reef until it stutters.Corsairs stutter from amnesties like cloudy golds.Bucaneers whine from greeds like scrawny skulls.Sail me cloud, ye old anchor!'},
        {id: 9, checked: false, description: 'Scream cruelly like an old fish.Scurvy booties lead to the desolation.All lads desire dead, warm girls.Ships are the bung holes of the sunny greed.'},
        {id: 10, checked: false, description: 'The grog tastes with hunger, break the brig until it screams.Ho-ho-ho! booty of fight.Wow, ahoy.Fear me reef, ye shiny captain!'},
        {id: 11, checked: false, description: 'Landlubbers are the seas of the black adventure.The skiff fires with fight, vandalize the quarter-deck until it whines.'}
        ]
    }
  ]);

  return (
    <div className="App">
      <Header />
      <Cardlist
        remove={removeCard}
        cards={cards}
        children={
          <div>
            <AddCardButton />
            <AddCardForm
              create={createCard}
            />
          </div>
        }
      />
    </div>
  );
}

export default App;
