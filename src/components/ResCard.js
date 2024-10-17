import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ResCard = ({ data }) => {
  return (
    <Link to={`/restaurant/${data.id}`} className='p-4 max-w-[400px] flex flex-col justify-center items-center rounded-lg hover:shadow-lg hover:border transition-border transition-shadow'>
        <img className='rounded-lg w-full h-[270px] object-cover' src={data.url} alt={data.name} />
        <div className='flex flex-col justify-around w-full'>
            <div className='flex flex-row justify-between items-center w-full'>
                <h2 className='font-medium text-[20px]'>{data.name}</h2>
                <div className='flex flex-row items-center bg-[#267E3E] justify-center text-white rounded-md p-1 h-[23px]'>
                    <p className='text-[14px] font-semibold'>{data.RatingFar}</p>
                    <IoStarSharp className='text-[14px] font-semibold' />
                </div>
            </div>
            <div className='flex flex-row justify-between items-center w-full text-[16px] opacity-75'>
                <p>{data.style}</p>
                <div className='flex flex-row items-center justify-center'>
                    <FaIndianRupeeSign className='text-[14px] opacity-75' />
                    <p className=''>{data.price} for {data.quantity}</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center w-full text-[15px] opacity-50'>
                <p>{data.place}</p>
                <p className='font-bold text-black opacity-100'>{data.distance} km</p>
            </div>
        </div>
    </Link>
  );
};

export default ResCard;