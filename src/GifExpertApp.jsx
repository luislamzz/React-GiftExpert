import { useState } from "react";
import { AddCategories, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newValue) => {
    if (categories.includes(newValue)) return;

    setCategories([newValue, ...categories]);
    // setCategories((cat) => [...cat, newValue]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategories
        // setCategories={setCategories}
        onNewCategory={(newValue) => onAddCategory(newValue)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
