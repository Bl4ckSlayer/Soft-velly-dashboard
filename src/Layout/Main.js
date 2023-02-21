import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Pages/Shared/LeftNav';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>

            <div class="grid grid-cols-5 gap-2">
                <div class="col-span-1">
                    <LeftNav></LeftNav>
                </div>
                <div class="col-span-4 my-2 mr-2">
                    <Outlet></Outlet>
                </div>
            </div>

            {/* <div className='flex gap-2'>
                <LeftNav></LeftNav>
                <Outlet></Outlet>

            </div> */}
        </div>
    );
};

export default Main;