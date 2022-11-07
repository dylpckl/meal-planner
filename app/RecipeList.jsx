"use client";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import Image from "next/image";
// import data from "./recipes.json";

export default function RecipeList({ recipes }) {
  const [query, setQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  // const [isDropped, setIsDropped] = useState(false);
  // const draggableMarkup = <Draggable>Drag me</Draggable>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    // const test =
    //   recipes.filter(
    //     (e) => e.recipe.label.includes(query)
    //     // e.recipe.label.includes("Spicy Lemon and Garlic Chicken Spaghetti")
    //   ).length > 0;
    // console.log(recipes);
    // console.log(test);

    const newArr = recipes.filter((e) =>
      e.recipe.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(newArr);
  };

  const handleClear = () => {
    setQuery("");
    setFilteredRecipes(recipes);
  };

  return (
    <div>
      {/* <DndContext onDragEnd={handleDragEnd}> */}

      <div className="flex gap-4 items-center">
        <h1 className="text-3xl">search</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button
            type="Submit"
            // onClick={() => handleSearch(query)}
          >
            search
          </button>
        </form>

        <button onClick={() => handleClear()}>clear</button>
      </div>

      <div>
        <h1 className="text-3xl">recipe list</h1>
        <ul className="flex flex-col gap-4">
          {filteredRecipes.map((r) => (
            <li className="bg-gray-600 rounded flex gap-2">
              <Image
                src="https://picsum.photos/200"
                // src={r.recipe.images.REGULAR.url}
                alt={r.recipe.label}
                width={300}
                height={300}
              />
              <h2 className="text-2xl">{r.recipe.label}</h2>
            </li>
          ))}
        </ul>
      </div>
      {/* {isDropped ? draggableMarkup : null}
        <Droppable>{isDropped ? draggableMarkup : "drop here"}</Droppable>
      </DndContext> */}
    </div>
  );

  // function handleDragEnd(event) {
  //   if (event.over && event.over.id === "droppable") {
  //     setIsDropped(true);
  //   }
  // }
}
