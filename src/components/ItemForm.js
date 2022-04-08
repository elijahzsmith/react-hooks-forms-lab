import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Produce')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const newItem = {
    id: uuid(),
    name: name,
    category: category
  }

  const handleItemFormSubmit = (e) => {
    e.preventDefault()
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={(e) => handleItemFormSubmit(e)}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => handleNameChange(e)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => handleCategoryChange(e)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
