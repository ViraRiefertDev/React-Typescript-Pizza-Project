import React, { FC, useState } from 'react';
import AddPizzaFrom from './components/AddPizzaForm';
import MyAddPizzaForm from './components/MyAddPizzaForm';
import './App.css';
import Pizza from './models/Pizza';

const App: FC = () => {
  const [PizzasList, setPizzasList] = useState<Pizza[]>([]);
  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...PizzasList, newPizza]);
  };

  console.log('pizzasList >>>>>> ', PizzasList);

  return (
    <div className='App'>
      <div className='wrap'>
        <span className='heading'>Наша приццерия</span>
        {/* <AddPizzaFrom 
        addPizza = {addPizza}
      /> */}
        <MyAddPizzaForm addPizza = {addPizza}/>
      </div>
    </div>
  );
};

export default App;
