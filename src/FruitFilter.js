import React, { useState } from 'react';

const fruitData = [
  { name: 'Apple', price: 1.5 },
  { name: 'Banana', price: 0.5 },
  { name: 'Cherry', price: 2.0 },
  { name: 'Date', price: 3.0 },
  { name: 'Elderberry', price: 1.0 },
  { name: 'Fig', price: 2.5 },
  { name: 'Grape', price: 2.1 },
  { name: 'Honeydew', price: 3.2 },
  { name: 'Indian Fig', price: 2.8 },
  { name: 'Jackfruit', price: 1.9 },
  { name: 'Kiwi', price: 1.6 },
  { name: 'Lemon', price: 0.8 },
  // Add more fruits as needed
];

const convertToINR = (price) => {
  const conversionRate = 82; // 1 USD = 82 INR
  return (price * conversionRate).toFixed(2);
};

const FruitFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFruits, setFilteredFruits] = useState(fruitData);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = fruitData.filter((fruit) => {
      return (
        fruit.name.toLowerCase().includes(value) ||
        convertToINR(fruit.price).includes(value)
      );
    });
    setFilteredFruits(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or price..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name} - ₹{convertToINR(fruit.price)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitFilter;
