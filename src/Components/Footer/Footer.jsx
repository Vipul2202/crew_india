import React from 'react';
import logo8 from '../../assets/logo8.png';
import { FaLink, FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import OurTeam from '../Our_Team/OurTeam';
import X from  '../../assets/X.png';
import link from  '../../assets/link.png';
import leet from  '../../assets/leet.png';


const Footer = () => {
    return (
        <div className='bg-black h- '>


            <footer class="bg-indigo-900 dark:bg-gray-900 gradient-background">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">

                            <img src={logo8} class="h-[70px] w-32 me-3" alt="crewsphere" />


                        </div>


                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 font-semibold text-white uppercase dark:text-white text-lg flex items-center">
                                    <FaLink className="mr-2" />
                                    Quick Links
                                </h2>
                                <ul class="text-white font-medium">
                                    <li class="mb-4">
                                        <a href="https://flowbite.com/" class="hover:underline pl-8">About</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://flowbite.com/" class="hover:underline pl-8">OurTeam</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://flowbite.com/" class="hover:underline pl-8">Hiring</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://flowbite.com/" class="hover:underline pl-8">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindcss.com/" class="hover:underline pl-8">FAQ'S</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 font-semibold text-white uppercase dark:text-white text-lg flex items-center">
                                    <FaEnvelope className="mr-2" />
                                    E-Mail
                                </h2>
                                <ul class="text-white font-medium">
                                    <li class="mb-4">

                                        <a href="https://github.com/themesberg/flowbite" class="hover:underline "> meet@bandhulbansal.com</a>
                                    </li>

                                </ul>
                            </div>
                            {/* <div className="text-center sm:text-left">
                                <h2 className="mb-6 font-semibold text-white uppercase dark:text-white text-lg flex items-center justify-center sm:justify-start">
                                    <FaPhone className="mr-2" />
                                    Contact Us
                                </h2>
                                <ul className="text-white-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline text-white font-bold">+91-6239579277</a>
                                    </li>
                                </ul>
                            </div> */}



                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
                    <div class="sm:flex sm:items-center sm:justify-between gradient-background-2">
                    <div class="flex justify-center space-x-5">
    <a href="https://www.facebook.com/crewsphere" target="_blank" rel="noopener noreferrer">
        <img src={leet}class="social-icon" />
    </a>
    <a href="https://twitter.com/CrewsphereIN" target="_blank" rel="noopener noreferrer">
        <img src={X} className="social-icons" />
    </a>
    <a href="https://www.linkedin.com/company/crewsphere/"  target="_blank" rel="noopener noreferrer">
        <img src={link} class="social-icon" />
    </a>
</div>

                        <span class="text-sm text-white font-bold sm:text-center dark:text-gray-400 flex justify-center">© 2023 <a href="\" class="hover:underline">Crewsphere</a>. All Rights Reserved.
                        </span>
                       
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer
