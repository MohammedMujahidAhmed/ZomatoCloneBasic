import React from 'react';
import zomatoLogo from '../assets/images/zomatoBlack.avif';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom'; 

const Header = ({ searchTerm, setSearchTerm , check }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='flex flex-row items-center w-full h-full justify-between p-3'>
        <div className='flex flex-row w-[70%] h-full gap-4 items-center'>
            <Link to='/'>
                <img className='w-[170px]' src={zomatoLogo} alt="Zomato Logo" />
            </Link>
            {
                check?
                <div className='hidden md:flex md:flex-row lg:flex lg:flex-row border items-center gap-1 justify-center p-1 w-[90%] h-full text-[18px] rounded-md shadow-black'>
                    <CiSearch className='h-full text-[30px]' />
                    <input 
                        type='text' 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleSearch}
                        className='w-full text-[14px] h-[40px] focus:outline-none focus:ring-0' 
                        placeholder='Search for a restaurant by name'
                    />
                </div> 
                :<></>
            }
        </div>
        <div className='hidden md:flex md:flex-row lg:flex lg:flex-row gap-2 opacity-75 hover:opacity-100 transition-opacity text-[20px]'>
            <button>Log in</button>
            <button>Sign Up</button>
        </div>
        <div className='md:hidden lg:hidden flex flex-row gap-2 opacity-75 hover:opacity-100 transition-opacity text-[20px]'>
            <GiHamburgerMenu />
        </div>
    </div>
  );
}

export default Header;