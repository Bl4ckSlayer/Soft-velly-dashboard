import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='bg-gray-300 p-4 mb-4'>

            <div className='text-start'>
                <Link><h2 className='text-5xl font-bold'><span className='text-orange-600'><i>Soft</i></span> <span className='text-blue-900'><i>Valley</i></span></h2></Link>
            </div>

        </div>
    );
};

export default Navbar;