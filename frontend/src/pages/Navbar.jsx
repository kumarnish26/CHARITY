import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faHome, faTimes } from "@fortawesome/free-solid-svg-icons";
import ToggleMode from "../ui/mode-toggle";
import ModeToggleTwo from "../ui/mode-toggle";

export default function Navbar() {

    const [sideNav, setSideNav] = useState(false);

    const handleClick = () => {
        setSideNav(false);
        window.scroll(0, 0);
    }

    return (
        <header className="bg-gray-800 dark:bg-gray-900 text-white fixed w-full z-20 top-0 left-0">
            <div className="container mx-auto flex items-center justify-between p-5 h-[80px]">
                <Link to="/" onClick={handleClick}>
                    <div className="flex items-center justify-center">
                        <p className="font-Apricot font-bold text-2xl sm:text-4xl uppercase">CVIT</p>
                    </div>
                </Link>
                <div className="hidden md:flex items-center justify-center gap-7 font-Montserrat">

                    <NavLink
                    onClick={handleClick} to="/" 
                    className={({isActive}) => `text-xl hover:scale-105 font-medium ${isActive ? 'underline underline-offset-8' : ''}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                    onClick={handleClick} to="/dashboard" 
                    className={({isActive}) => `text-xl hover:scale-105 font-medium ${isActive ? 'underline underline-offset-8' : ''}`}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                    onClick={handleClick} to="/campaigns" 
                    className={({isActive}) => `text-xl hover:scale-105 font-medium ${isActive ? 'underline underline-offset-8' : ''}`}
                    >
                        Campaign
                    </NavLink>
                    <NavLink
                    onClick={handleClick} to="/transactions" 
                    className={({isActive}) => `text-xl hover:scale-105 font-medium ${isActive ? 'underline underline-offset-8' : ''}`}
                    >
                        Transactions
                    </NavLink>

                    <ToggleMode/>

                </div>
                <button 
                    className="md:hidden hover:text-gray-500 p-1 transition-all inset-0 cursor-pointer"
                    onClick={() => setSideNav(true)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className={`z-50 md:hidden fixed top-0 left-0 h-screen w-full bg-white text-black flex flex-col items-center transition-transform duration-300 ${sideNav ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="bg-gray-800 dark:bg-gray-900 text-white flex items-center justify-between w-full p-4 font-Montserrat font-semibold uppercase text-[1.13rem]">
                    <Link onClick={handleClick} className="">Charity Voting &<br/> Impact Tracking</Link>
                    <button
                        className="flex items-center justify-center hover:text-gray-500 transition-all text-xl py-3 pr-1 cursor-pointer"
                        onClick={() => setSideNav(false)}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className="bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-Montserrat flex flex-col w-full h-full">
                    <p className="font-semibold p-4 border-gray-300 bg-gray-200 dark:bg-slate-600">Menu</p>
                    <NavLink to="/" 
                        className="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-slate-700 p-4"
                        onClick={handleClick}
                    >
                        <p className="uppercase font-normal">Home</p>
                        <FontAwesomeIcon icon={faHome} className="scale-110" />
                    </NavLink>
                    <NavLink to="/dashboard" 
                        className="hover:bg-gray-100 dark:hover:bg-slate-700 p-4"
                        onClick={handleClick}
                    >
                        <button className="uppercase font-normal">Dashboard</button>
                    </NavLink>
                    <NavLink to="/campaigns" 
                        className="hover:bg-gray-100 dark:hover:bg-slate-700 p-4"
                        onClick={handleClick}
                    >
                        <button className="uppercase font-normal">Campaigns</button>
                    </NavLink>
                    <NavLink to="/transactions"
                        className="hover:bg-gray-100 dark:hover:bg-slate-700 p-4"
                        onClick={handleClick}
                    >
                        <button className="uppercase font-normal">Transactions</button>
                    </NavLink>
                    <div className="">
                        <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-slate-600">
                            <p className="font-semibold">Settings</p>
                            <FontAwesomeIcon icon={faGear} className="scale-125 pr-1" />
                        </div>
                        <div className="flex items-center justify-between p-3 transition-transform duration-300">
                            <p className="text-md">Theme</p>
                            <div className="scale-75">
                                <ModeToggleTwo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}