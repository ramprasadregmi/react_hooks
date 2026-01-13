import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
function FavoriteColor() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My Favorite color is {color}!</h1>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
    </>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoriteColor />
  </StrictMode>
);
