import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-[#0b111e] p-4'>
        <div className='max-w-[1240px]  text-white flex justify-between text-center mx-auto'>
            <div className='text-3xl '>
                Khairulhub
            </div>

{
                toggle ?
                <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-2xl text-center md:hidden block'></AiOutlineClose>
                :
                <AiOutlineMenu onClick={()=>setToggle(!toggle)}  className='text-2xl text-center md:hidden block'></AiOutlineMenu>
}

               

               
            <ul  className='hidden  md:flex items-center gap-10'>
                <li><Link to="">Home</Link></li>
                <li><Link to="">About</Link></li>
                <li><Link to="">Services</Link></li>
                <li><Link to="">Works</Link></li>
                <li><Link to="">Contact</Link></li>
            </ul>


            {/* responsiver */}
            <ul  className={`duration-300 md:hidden w-full h-screen text-white bg-black fixed top-[68px] 
            ${toggle? 'left-[0]':'left-[100%]' }`
            
            }>
                <li className='p-3'><Link to="">Home</Link></li>
                <li className='p-3'><Link to="">About</Link></li>
                <li className='p-3'><Link to="">Services</Link></li>
                <li className='p-3'><Link to="">Works</Link></li>
                <li className='p-3'><Link to="">Contact</Link></li>
            </ul>
        
        
        
        </div>
    </div>
    );
};

export default Navbar;