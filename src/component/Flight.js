import React from 'react';
import './style/Style.css';




const Flight = ({plane}) => {
    return (
        <div className='flex  border-between ' >
            <div className='flex justify-center'>
                <p className='place-text' >Airlinename</p>
                <p className='text-lg ' >{plane.airlineName}</p>
            </div>
            
            <div className='flex flex-mx '>
                <p className='place-self-sm ' >From</p>
                <p className='text-lg ' >{plane.from}</p>
            </div>
            
            <div className='flex-col justify' >
                <img 
                    src="https://media2.giphy.com/media/iCEPetKVHKDOVOzMSi/giphy.gif?cid=ecf05e476g9lt4kweigpdc7b50oj7s4heyqcb0cxpnlquu7a&rid=giphy.gif" 
                    alt="light"
                    width={100}
                    height={70} 
                 />
            </div>
            <div className='items-center center mx-3 '>
                <p className='place-text-slate text ' >To</p>
                <p className='text-lg ' >{plane.to}</p>
            </div>
            
            <div className='justify-center mx-3 '>
                <p className='place-self-sm ' >Depart</p>
                <p className='text-lg ' >{plane.departure.departureDate}</p>
            </div>
            
            <div className='items-center-center '>
                <p className='place-sm ' >Flight </p>
                <p className='text-lg ' >{plane.airlineName}</p>
            </div>
            {/* <Link>
            <button onClick={Payment}>Book</button>
            </Link>
             */}
        </div>
    )
}

export default Flight