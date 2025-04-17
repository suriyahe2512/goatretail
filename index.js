
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const initialGoats = [
  { id: 1, name: "Boer Goat", price: "₹15,000", image: "https://source.unsplash.com/400x300/?goat" },
  { id: 2, name: "Jamunapari Goat", price: "₹18,000", image: "https://source.unsplash.com/401x301/?goat" },
];

function App() {
  const [goats, setGoats] = useState(initialGoats);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newGoat = {
      id: Date.now(),
      name: form.name.value,
      price: form.price.value,
      image: form.image.value,
    };
    setGoats([...goats, newGoat]);
    form.reset();
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>🐐 GoatBazaar</h1>
      <p>Buy and Sell the Best Goats in Your Area!</p>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Sell a Goat"}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Goat Name" required />
          <input name="price" placeholder="Price" required />
          <input name="image" placeholder="Image URL" required />
          <button type="submit">List Goat</button>
        </form>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {goats.map((goat) => (
          <div key={goat.id} style={{ background: "#fff", color: "#000", padding: "10px", borderRadius: "10px" }}>
            <img src={goat.image} alt={goat.name} width="200" height="150" style={{ borderRadius: "8px" }} />
            <h3>{goat.name}</h3>
            <p>Price: {goat.price}</p>
            <button>Contact Seller</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
