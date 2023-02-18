import React ,{useContext} from 'react'
import Payment from './Payment'
import {MediumContext} from './context/MediumContextProvider'


const Result = () => {

  
  const { st  } = useContext(MediumContext)

  return (
  <div className='flex justify-center w-full 'id='make-safe' >
      <div className='make justify' id='pay-safe'>

      { st ?
      <Payment data={st} />
      :(
      
      <div className='bg-blue-w' >
      <h1 className='text-3xl font-xl mt mb-4' >No ticket in cart</h1>
      <h3 className='text-xl font-xl mt-2 mb-4' >Make a safe journey </h3>
      <img 
          src="https://media2.giphy.com/media/iCEPetKVHKDOVOzMSi/giphy.gif?cid=ecf05e476g9lt4kweigpdc7b50oj7s4heyqcb0cxpnlquu7a&rid=giphy.gif" 
          alt="light"
          width={200}
          height={150} 
        />
      </div>)
}

      <div className='justify-p-w' id='payment'>
      <h3 className='text-xl font-xl ' id="add" >ADD CARD TO PAY</h3>
        <form className='bg-white p-4' >
          <div  className='relative-name'>
          <input type="text" name='name' id='#name' className='block name'placeholder="NAME OF PASSANGER" required  >

          </input>

          </div>
          <div className="relative-full mb group">
            <input type="text" name="floating_email" id="floating_email" className="block peer" placeholder="NAME ON CARD" required />
          </div>
          <div className="relative z-group">
            <input type="text" name="floating_password" id="floating_password" className="block none peer" placeholder="CARD NUMBER" required />
          </div>
          <div className="grid md:grid">
            <div className="relative z-w-full ">
              <input type="date" name="floating_first_name" id="floating_first_name" className=" focus:peer" placeholder="expire date" required />
            </div>
            <div className="relative group">
              <input type="number" name="floating_last_name" id="floating_last_name" className=" text-gray-peer" placeholder="CVV" required />
            </div>
          </div>
          <button type="submit" className="text-focus:ring  dark:hover">Submit</button>
        </form>

      </div>
    </div>
    </div>
  )
}

export default Result