import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";

const plants = [
  { id: 1, name: "Snake Plant", price: 200, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Aloe Vera", price: 150, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 250, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Spider Plant", price: 180, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Fern", price: 220, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Cactus", price: 120, category: "Succulent", img: "https://via.placeholder.com/100" }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = ["Indoor", "Outdoor", "Succulent"];

  return (
    <div>
      <h2>Plant Categories</h2>

      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>

          {plants
            .filter(p => p.category === cat)
            .map(p => (
              <div key={p.id}>
                <img src={p.img} alt={p.name} />

                <h4>{p.name}</h4>
                <p>₹{p.price}</p>

                <button
                  onClick={() => handleAdd(p)}
                  disabled={addedItems.includes(p.id)}
                >
                  {addedItems.includes(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}