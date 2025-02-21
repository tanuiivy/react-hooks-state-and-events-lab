import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleCartToggle(){
    setIsInCart((prevStatus) => !prevStatus);
  }

  const itemClass = isInCart? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick= {handleCartToggle}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
        </button>
    </li>
  );
}

export default Item;
