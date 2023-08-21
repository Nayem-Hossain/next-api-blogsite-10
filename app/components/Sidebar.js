'use client'
import React, { useEffect, useState } from 'react';
import { getPostsCategories } from '../lib/api';
import Link from 'next/link';

const Sidebar = () => {

    let menuArray = [true, false, false];
    const [menu, setMenu] = useState(menuArray);
    const [show, setShow] = useState(true);
    const [category, setCategory] = useState([]);

    const setMenuValue = (props) => {
        let newArr = [...menu];
        newArr[props] = !newArr[props];
        setMenu(newArr);
    }
    useEffect(() => {
        (async () => {
          try { 
            const categories = await getPostsCategories();
            console.log("Categories",categories);
            setCategory(categories);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        })();
      }, []);
   
    return (
        <div>
            <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full'} xl:rounded-r transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 flex-col`}>

                <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
                    <button onClick={() => setMenuValue(0)} className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  ">
                        <p className="text-sm leading-5  uppercase">Categories</p>
                        <svg id="icon1" className={`${menu[0] ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {category.map((item) => {
                        return (
                            <div key={item.id} id="menu1" className={`${menu[0] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-1 `}>
                                <Link href={`/blog-category/${item.id}`} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                                    <p className="text-base leading-4  ">{item.name}</p>
                                </Link>

                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    );
};

export default Sidebar;