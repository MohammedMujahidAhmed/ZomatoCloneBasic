import React, { useEffect, useState } from 'react';
import ResCard from '../components/ResCard';
import Header from '../components/Header';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6710f39ba85f4164ef301768.mockapi.io/api/vi/zomatoFake');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRestaurants(data);
        setFilteredRestaurants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    const filtered = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchTerm, restaurants]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} check={true} />
      <div className=''>
         <h1 className='text-[24px] font-bold mb-4 opacity-90'>
           <span className='opacity-50 font-semibold'>Popular Restaurants in and around </span>Hyderabad
         </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {
          filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <ResCard key={restaurant.id} data={restaurant} />
            ))
          ) : (
            <p>No restaurants found matching your search.</p>
          )
        }
      </div>
    </div>
  );
};

export default RestaurantList;