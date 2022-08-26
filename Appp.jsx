import React from 'react' ;
import { useState } from 'react';


 const Appp =() =>
 {
    const purple="8e44ad";
    const [bg, setBg] = useState(purple);
    const[name,setname]= useState('click me')

const bgChange =() =>
{
 let newBg='#34495e';
 setBg(newBg);
 setname('Ouch!!😠');

};

const bgBack = () => {
setBg(purple);
setname('uhuuuu:💄')
}
    return (
        <>
        <div style={{backgroundColor: bg}}>

           <button onMouseEnter ={bgChange} onMouseLeave={bgBack}>
            {name} 
            </button> 
        </div>
        </>
    );
    };
 export default Appp;