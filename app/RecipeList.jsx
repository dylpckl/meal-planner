"use client";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import Image from "next/image";
import { cuisineTypes, mealTypes } from "./(lib)/constants";
import Dropdown from "./Dropdown";
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
        <Dropdown options={cuisineTypes} />
      </div>

      <div>
        <h1 className="text-3xl">recipe list</h1>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {filteredRecipes.map((r) => (
            <li
              key={r.recipe.uri}
              className="relative"
            >
              <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <Image
                  src="https://picsum.photos/200"
                  // src={r.recipe.images.REGULAR.url}
                  alt={r.recipe.label}
                  width={300}
                  height={300}
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
                <input
                  type="checkbox"
                  className="absolute right-2 top-2 h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 z-20"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none z-10"
                >
                  <span className="sr-only">
                    View details for {r.recipe.label}
                  </span>
                </button>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                  {r.recipe.label}
                </p>
                <p className="pointer-events-none block text-sm font-medium text-gray-900">
                  {r.recipe.totalTime}
                </p>
              </div>
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
