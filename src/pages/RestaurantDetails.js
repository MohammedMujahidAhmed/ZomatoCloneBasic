import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header'; 
import { IoStarSharp } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaDirections } from "react-icons/fa";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(id);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`https://6710f39ba85f4164ef301768.mockapi.io/api/vi/zomatoFake/${id}`);
        if (!response.ok) {
          throw new Error('Restaurant data not found');
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <Header check={false} />
      <div>
        <img className="rounded-lg w-full h-[400px] object-cover mb-6 " src={restaurant.url} alt={restaurant.name} />
        <div className='flex flex-row justify-between'>
            <h1 className="text-[32px] font-bold">{restaurant.name}</h1>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-row itemsx-center justify-center gap-1'>
                    <div className='flex flex-row items-center bg-[#267E3E] justify-center text-white rounded-md p-1 w-[50px] h-[30px]'>
                        <p className='text-[14px] font-semibold'>{restaurant.RatingFar}</p>
                        <IoStarSharp className='text-[14px] font-semibold' />
                    </div>
                    <div className='flex flex-col items-end text-[12px] opacity-90'>
                        <p>{restaurant.diningRat}</p>
                        <p className=''>Dining Rating</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-1 '>
                    <div className='flex flex-row items-center bg-[#267E3E] justify-center text-white rounded-md p-1 w-[50px] h-[30px]'>
                        <p className='text-[14px] font-semibold'>{restaurant.RatingNear}</p>
                        <IoStarSharp className='text-[14px] font-semibold' />
                    </div>
                    <div className='flex flex-col items-end text-[12px] opacity-90'>
                        <p>{restaurant.DelivaryRat}</p>
                        <p>Delivery Rating</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div>
        <p className="text-[18px] opacity-90">{restaurant.description}</p>
        <p className="mt-2 opacity-75 text-[16px]">{restaurant.place}</p>
        <div className='flex flex-row items-center text-center'>
            <p><span className='text-orange-500'>Open now</span> - 12noon - 11:30pm Today</p>
            <IoIosInformationCircleOutline />
        </div>
      </div>
        <div className='flex flex-row items-center justify-start gap-4 my-2'>
        <button className='flex flex-row gap-2 items-center justify-center border border-black rounded-md p-2'>
            <FaDirections className='text-red-700'/>
            <p>Direction</p>
        </button>
        <button className='flex flex-row gap-2 items-center justify-center border border-black rounded-md p-2'>
            <FaDirections className='text-red-700'/>
            <p>Direction</p>
        </button>
        <button className='flex flex-row gap-2 items-center justify-center border border-black rounded-md p-2'>
            <FaDirections className='text-red-700'/>
            <p>Direction</p>
        </button>
      </div>
    </div>
  );
};

export default RestaurantDetails;