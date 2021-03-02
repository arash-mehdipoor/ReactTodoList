import React, { useState } from 'react';
// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import TodoList from './TodoList';


const App = () => {
  const [items, setItems] = useState([])
  let title = 'Things to do';

  const addNew = (text) => {
    debugger
    let item = {
      id: items.length + 1,
      text: text
    }
    let updatedList = items.concat(item);
    setItems(updatedList)
  }




  return (
    <TodoList addItem={addNew} title={title} items={items} />
  )
}

export default App
