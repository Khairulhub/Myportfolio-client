import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div>
            <div className='bg-[#0b111e] py-[100px] w-full ' >
        <div className='max-w-[1240px]  text-white  text-center mx-auto py-[125px] relative'>
           <div>
           <h1 className='text-xl '>Hello,I'm</h1>
            <h1 className='text-6xl'>Khairul Islam</h1>
            <h1 className='text-4xl'>I'm a  <Typed
                    strings={['Web Developer', 'Freelancer', 'Designer', 'Photographer','Youtuber']}
                    typeSpeed={100}
                    loop={true}
                />
                
                </h1>

            
           </div>

            <div className='absolute top-2/4 sm:left-1 md:left-0'>
             <div className='relative '>
             <Link to=""><AiFillLinkedin></AiFillLinkedin></Link>
                <Link to=""><AiFillFacebook></AiFillFacebook></Link>
                <Link to=""><AiFillGithub></AiFillGithub></Link>
                <hr className='w-[50px] border-[2px] rotate-90 absolute bottom-[-30px] left-[-15px] text-center rounded'/>
             </div>
            </div>
            {/* <div className='absolute top-2/4 right-0'>
             <div className='relative'>
             <a href=""><CgScrollV></CgScrollV> </a>
               
                <hr className='w-[50px] border-[2px] rotate-90 absolute bottom-[-30px] left-[-15px] text-center rounded'/>
             </div>
            </div> */}


        </div>
        </div>
        </div>
    );
};

export default Header;