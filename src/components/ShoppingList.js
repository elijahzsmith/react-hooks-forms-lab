import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList( ) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(itemData);
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredFoods = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  const itemsToDisplay = filteredFoods.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const handleSearchChange = (e) => setSearch(e.target.value)

  function onItemFormSubmit(newItem) {
    console.log(newItem)
    setItems([...items, newItem])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={search} setSearch={setSearch} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;