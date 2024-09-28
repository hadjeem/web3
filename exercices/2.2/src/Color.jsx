import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState(0);
  const listColor = ["red", "blue", "green", "yellow", "purple"];


  const handleColor = () => {
    setColor((color + 1) % listColor.length);
  };

  return (
    <>
    <div style={{ backgroundColor: listColor[color], width: "100px", height: "100px" }}>
      Color is {listColor[color]}
        <br />
      next color is {listColor[(color + 1) % listColor.length]}
      
    </div>
    <button onClick={handleColor}> Change Color</button>
    </>
  );
};

export default Color;
