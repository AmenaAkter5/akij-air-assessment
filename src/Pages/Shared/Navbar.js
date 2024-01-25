import React, { useState } from 'react';
import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navMenuItems =
        <ul>
            <li className=' list-none inline mr-4 p-2'>Flight</li>
            <li className=' list-none inline mr-4 p-2'>Hotel</li>
            <li className=' list-none inline mr-4 p-2'>Tour</li>
            <li className=' list-none inline mr-4 p-2'>Visa</li>
            <li className=' list-none inline mr-4 p-2'>Promotion</li>
            <li className=' list-none inline p-2'>Others</li>
            <li className=' list-none inline p-2'><IoIosArrowDown className='inline' /></li>
        </ul>

    // const navMenuItemsForMobile =
    //     <ul>
    //         <li className=' list-none mr-4 p-2'>Flight</li>
    //         <li className=' list-none mr-4 p-2'>Hotel</li>
    //         <li className=' list-none mr-4 p-2'>Tour</li>
    //         <li className=' list-none mr-4 p-2'>Visa</li>
    //         <li className=' list-none mr-4 p-2'>Promotion</li>
    //         <li className=' list-none p-2'>Others</li>
    //         <li className=' list-none p-2'><IoIosArrowDown className='inline' /></li>
    //     </ul>


    const buttons = <>
        <button type="submit" className="outline-none border border-[#700014] rounded hover:bg-[#700014] hover:text-white normal-case font-normal text-[#8E011A] h-[36px] w-[85px] mr-4">Sign In</button>
        <button type="submit" className="bg-[#8E011A] outline-none border-none rounded hover:bg-[#700014] normal-case font-normal text-white h-[36px] w-[85px]">Sign Up</button>
    </>

    return (
        <nav>
            <div className="border border-b-[#E0E0E0] h-[44px] lg:h-[62px] py-2 lg:py-3">
                <div className='max-w-screen-md lg:max-w-7xl flex items-center justify-between mx-auto lg:px-0 px-4'>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <img className="lg:w-32 w-24" src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="block lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-[#8E011A]"
                        >
                            <FaBars />
                        </button>
                    </div>

                    <div className={`lg:block ${isOpen ? 'flex-col' : 'hidden'}`}>
                        {navMenuItems}
                    </div>
                    <div className={`lg:block ${isOpen ? 'flex-col' : 'hidden'}`}>
                        {buttons}
                    </div>


                    {/* <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        {navMenuItems}
                    </div>
                    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        {buttons}
                    </div> */}
                </div>
            </div>


        </nav>
    );
};

export default Navbar;