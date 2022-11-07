"use client";

import { useState } from "react";
import data from "./recipes.json";

export default function Query() {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div>
      <h1 className="text-3xl">query</h1>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
