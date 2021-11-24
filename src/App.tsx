import React from 'react';

import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todos={[
        {title: "Learn more Go Lang", isCompleted: true},
        {title: "Moving", description:"Moving boxes to the new house", isCompleted: false},
        {title: "Do the hokey pokey", description:"turn yourself around", isCompleted: false}
      ]} />
    </div>
  );
}

export default App;
