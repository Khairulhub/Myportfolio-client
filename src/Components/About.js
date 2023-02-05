import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import my_bg from '../../src/Images/my-bg.png'
const About = () => {
    return (
        <div>
            <div className='bg-[#0b111e] w-full]'>
        <div className='max-w-[1240px] mx-auto py-[5px] text-white'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className=''>
                                <img src={my_bg} alt="khairulhub" className='w-9/12 mx-auto ' />
                            </div>
                            <div className='flex items-center  '>
                                        <div>
                                        <h1 className='text-4xl py-5'>Hi, This is Khairul Islam.</h1>
                                        <p className='text-xl mb-5'>A Passionate Web Developer, Entrepreneur and Programmer. I love to play with coding, building software, and focusing on learning new technologies. I always try to my best to achive something new.</p>

                                        <p className='text-xl mb-5'>I am a self-taught web developer. I have been working as a web developer for 2 years. I have a lot of experience in web development. I have worked with many clients and have completed many projects. I have worked with many clients and have completed many projects. I have worked with many clients and have completed many projects.</p>



                                        <Link to=""  className='py-3 px-6 rounded text-purple-300 font-bold bg-purple-700'><AiOutlineWhatsApp className='inline'></AiOutlineWhatsApp> Whats App</Link>
                                        </div>
                            </div>
                        </div>
            </div>
    </div>
        </div>
    );
};

export default About;