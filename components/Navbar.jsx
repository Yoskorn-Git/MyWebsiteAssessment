'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className={'navbar-body'} >
            {/* <nav className={'navbar-body'} > */}
            <div className='flex gap-4 items-center'>
                <Link href='/' className='flex flex-col items-center'>
                    <Image
                        src={'/assets/icons/icon-glasses.svg'}
                        width={60}
                        height={60}
                        className='rounded-full'
                        alt='profile'
                        onClick={() => setToggleDropdown(!toggleDropdown)}
                    />
                    <p className='text-2xl hidden md:block font-bold cursor-pointer'><span className='text-[#6C0345]'>Y.</span> Lertratanakham</p>

                </Link>
            </div>

            <div className='hidden sm:flex items-center'>
                <div className='flex body_text md:gap-5 xl:gap-12 items-center'>
                    <Link href='/'>
                        <button className='hover:text-[#6C0345]'>Home</button>
                    </Link>
                    <Link href='/about'>
                        <button className='hover:text-[#6C0345]'>About</button>
                    </Link>
                    <Link href='/contact'>
                        <button className='hover:text-[#6C0345]'>Contact</button>
                    </Link>
                </div>
            </div>

            <div className='sm:hidden flex relative'>
                <div className='flex'>

                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" onClick={() => setToggleDropdown(!toggleDropdown)}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                    {toggleDropdown && (
                        <div id="dropdownDotsHorizontal" className="z-[4] dropdown bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                            <ul className="py-2 text-sm text-gray-700">
                                <li>
                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
                                </li>
                                <li>
                                    <a href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Me</a>
                                </li>
                                <li>
                                    <a href="/contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
