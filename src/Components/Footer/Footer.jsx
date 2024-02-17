import React from 'react';
import logo8 from '../../assets/logo8.png';
import { FaLink, FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import OurTeam from '../Our_Team/OurTeam';
import X from  '../../assets/X.png';
import link from  '../../assets/link.png';
import leet from  '../../assets/leet.png';

const Footer = () => {
    return (
        <footer className="bg-indigo-900 dark:bg-gray-900 gradient-background">
            <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <img src={logo8} className="h-16 md:h-20 me-3" alt="crewsphere" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2">
                        <div>
                            <h2 className="mb-6 font-semibold text-white uppercase dark:text-white text-lg flex items-center">
                                <FaLink className="mr-2" />
                                Quick Links
                            </h2>
                            <ul className="text-white font-medium pl-6">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Our Team</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Hiring</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Testimonials</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">FAQ'S</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 font-semibold text-white uppercase dark:text-white text-lg flex items-center">
                                <FaEnvelope className="mr-2" />
                                E-Mail
                            </h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">meet@bandhulbansal.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                    <div className="flex justify-center space-x-5">
                        <a href="https://www.facebook.com/crewsphere" target="_blank" rel="noopener noreferrer">
                            <img src={leet} className="social-icon" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/CrewsphereIN" target="_blank" rel="noopener noreferrer">
                            <img src={X} className="social-icons" alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/company/crewsphere/" target="_blank" rel="noopener noreferrer">
                            <img src={link} className="social-icon" alt="LinkedIn" />
                        </a>
                    </div>
                    <span className="text-sm text-white font-bold mt-4 sm:mt-0">© 2023 <a href="/" className="hover:underline">Crewsphere</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
