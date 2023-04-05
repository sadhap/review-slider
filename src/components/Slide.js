import React, { useState } from 'react'
import people from '../data';
import {FaAngleLeft,FaAngleRight,FaQuoteRight} from 'react-icons/fa';
const Slide = () => {
  const [index,setIndex] = useState(0);
  const{name,image,job,text} = people[index];
  const randomPerson = () =>{
    setIndex (()=>{
      let newIndex = Math.trunc(Math.random() * people.length);
      return newIndex;
      // console.log(newIndex);
     });
    //  console.log(randomPerson);
    }
   const prevPerson = () =>{
     setIndex(()=>{
     if(index === 0){
      let newIndex = people.length - 1;
      return newIndex;
     }else{
      let newIndex = index - 1;
      return newIndex;
     }
     });
   }
   const nextPerson =()=>{
    setIndex(()=>{
      if(index === people.length -1){
        let newIndex = 0;
        return newIndex;
       }else{
        let newIndex = index +1;
        return newIndex;
       }
    });
   }
       return(
        <>
        <article className='review'>
          <div className='img-container'>
            <img src={image}
            alt={name}
            className='person-img'/>
            <span className='quote-icon'>
            <FaQuoteRight/>
            </span>
            </div>
            <div className='author'>{name.toUpperCase()}</div>
            <div className='job'>{job}</div>
            <div className='info'>{text}</div>
            <div className='button-container'>
            <button className='prev-btn' onClick={()=>prevPerson()}>
                <FaAngleLeft/>
            </button>
            <button className='next-btn' onClick={()=>nextPerson()}>
            <FaAngleRight/>
            </button>
            <div className='random-btn' onClick={()=>randomPerson()}>
              Random user
            </div>
            </div>
           </article>
        </>
        );
    }
   
export  default Slide;