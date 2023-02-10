import React, { useEffect, useState } from 'react'
import Flight from './Flight'
import "./style/Style.css"
import { Link } from 'react-router-dom';
import Payment from './Payment';

const Available = () => {
   const [data , setdata] = useState([]);
   useEffect(() => {
     async function GetData(){
        await fetch('https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights')
            .then(res => res.json())
            .then(ele => setdata(ele))
     }
     GetData() ;
   }, [])
      

    return (
      
        <div className='flex justify-center available ' >
          
          
          
        <h1 className='text font-medium ' id='ava'>AVAILABLE FLIGHTS</h1> 
        
       
        <div className='flex overflow-y-auto' >
        
         { data.map((ele , index) => ( 
         
                <Flight key={index} plane={ele} />
              
                
            ))
          }
          <div>
          {/* <Link>
            <button onClick={Payment}>Book</button>
            </Link>
           */}
          </div>
           
        </div> 
       
       
        
      
        </div>
    )
}

export default Available;