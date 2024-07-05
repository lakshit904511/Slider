import React, { useState } from 'react'
import Card from './Card';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
const Testimonial = (props) => {
    let reviews=props.reviews;
    const[indi,setIndi]=useState(0);
    function lefthandle(){
        if(indi-1<0){
            setIndi(reviews.length-1);
        }
        else{
            setIndi(indi-1)
        }
    }
    function righthandle(){
        if(indi+1>=reviews.length){
            setIndi(0);
        }
        else{
            setIndi(indi+1)
        }
    }
    function randomhandle(){
            let ran= Math.floor(Math.random()*reviews.length);
            setIndi(ran);
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
         <Card review={reviews[indi]} />
         <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-pointer hover:text-violet-500' onClick={lefthandle}> <FiChevronLeft /> </button>
            <button className='cursor-pointer hover:text-violet-500' onClick={righthandle}> <FiChevronRight /> </button>
         </div>
         <div className='mt-6'>
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-l' onClick={randomhandle}>Surprise Me</button>
         </div>
    </div>
  )
}

export default Testimonial;
