import React , {useContext} from 'react'
import {MediumContext} from './context/MediumContextProvider';
import "./style/Style.css"

const Payment = ({data}) => {

    const { des , ret  } = useContext(MediumContext)

    return (
        <div className='flex-col justify-evenly '  id='book'>
            <div className='flex flex-col evenly' id='place-self-data'>
                <h1 className='text font-xl' >Ticket Detail</h1>
                <div className='flex justify-evenly text-white' >
                    <div className='text self-center' >{data.from}</div>
                    <div className='flex flex-col' >
                        <img
                            src="https://media0.giphy.com/media/hVxJUqWXVrCGTDpnVU/giphy.gif?cid=790b761144290eb0b81c365ba65adaefbd0a829c4da1fd76&rid=giphy.gif"
                            alt="logo"
                            width={130}
                            height={80}
                        />
                    </div>
                    <div className='font-medium place-self' >{data.to}</div>
                </div>
                <div className='flex flex border-b' >
                            <h1 className='text-xl my-1' ><span className='text-xl'>Duration: </span> {data.duration} </h1>
                            <h1 className='text-xl my-1' ><span className='text-xl'>Airplane Name: </span>{data.airlineName}</h1>
                </div>
                <div className='center p mt' >
                    <div className='mr items-center' >
                        <div className='flex colll'>
                            <h1 className='text-3xl  font-lg' >Departure</h1>
                            <p className='text-xl' ><span>Date: </span>{des}</p>
                            <p className='text-xl' ><span>Time: </span>{data.departure.departureTime}</p>
                        </div>
                        <div className='flex evenly items-center'>
                            <h1 className='text-3xl font-lg' >Return</h1>
                            <p className='text-xl' ><span>Date: </span> {ret}</p>
                            <p className='text-xl' ><span>Time: </span> {data.return.returnTime}</p>
                        </div>
                    </div>
                    <div className='ml-5' >
                            <div className=' bg-blue items' >
                                <h1 className='text-5xl mb-3 ' >Fare Summary</h1>
                                <div className='border-b-1 mb-3' >
                                    <h1 className='text-xl' ><span className='text-2xl'>Flight Price: </span>Rs. {data.price}</h1>
                                    <h1 className='text-xl' ><span className='text-2xl'>Extra Charge: </span>Rs. 500</h1>
                                </div>
                                <h1 className='text-xl border-b-2 border-t-2 ' ><span className='text-2xl'>Total </span>Rs. {parseInt(data.price) + 500}</h1>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Payment