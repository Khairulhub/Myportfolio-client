import React from 'react';

const SequreForm = () => {
    return (
        <div className='bg-[#0b111e]  w-full h-screen'>
            <div className="max-w-[1240px]  text-white  text-center mx-auto py-[180px] ">
          <div className='flex justify-center align-middle'>
          <form action="" className='w-9/12 '>
                <input className='block w-full mb-5 p-3 outline-none rounded' type="email" name="" id="" placeholder="Enter Your Email" />
                <input  className='block w-full mb-5 p-3 outline-none rounded' type="password" name="" id="" placeholder='password'/>
                <button className='block w-full bg-sky-500 text-white p-3'> Submit
                </button>
            </form>
          </div>
            </div>
           
        </div>
    );
};

export default SequreForm;