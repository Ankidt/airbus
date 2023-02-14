import React, { useEffect , useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import { MediumContext } from './context/MediumContextProvider'
import "./style/Style.css";


const Detail = (props) => {

  const [data , setdata] = useState([]);

  useEffect(() => {
    async function GetData(){
      const Fromtr = props.start.charAt(0).toUpperCase() + props.start.slice(1).toLowerCase()
      const Totr = props.Last.charAt(0).toUpperCase() + props.Last.slice(1).toLowerCase() 
     
      await fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${Fromtr}&to=${Totr}`)
           .then(res => res.json())
           .then(ele => {
                     setdata(ele)
                    })
    }
    GetData();
     // eslint-disable-next-line
  }, [])


  const { setst  } = useContext(MediumContext)
  function handle(){
    setst(data[0])
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" id='aria-centre'>

      <div className="fixed inset-opacity"></div>

      <div className="fixed inset overflow-y-auto">
        <div className="min-h-full items-end">

          <div className="relative transform w-lg">

            {
                data.length > 0 
                 ?(
                    <div className='flex flex-col justify-center p-2'>
                        <div className='flex justify-white' >
                           <div className='text-center' >{data[0].from}</div>
                           <div className='flex flex-col' >
                            <h2 className='text-base my-2' >{data[0].duration}</h2>
                            <img 
                               src="https://media0.giphy.com/media/hVxJUqWXVrCGTDpnVU/giphy.gif?cid=790b761144290eb0b81c365ba65adaefbd0a829c4da1fd76&rid=giphy.gif" 
                               alt="logo" 
                                width={100}
                                height={50}
                               />
                           </div> 
                           <div className='text-3xl place-self-center' >{data[0].to}</div>
                        </div>
                        <div className='flex justify-around items-center py-2'>
                           <div className='flex-col-border-r ' >
                              <h2 className='border-b-base my-1 '><span className='font-lg' >Departure Time : </span>{data[0].departure.departureTime}</h2>
                              <h2 className='border-b '><span className='font-lg' >Return Time : </span>{data[0].return.returnTime}</h2>
                              <h2 className='border-my '><span className='font-lg' >Airplane Name : </span>{data[0].airlineName}</h2>
                           </div>
                           <div className='items-center border-l'>
                            <h1 className='text-xl my-2' ><span className='font-xl'>PRICE : </span>{data[0].price}</h1>
                           <Link to='/checkout' ><button onClick={handle} className="bg-hover:bg" id="book-large">
                              Book
                            </button></Link>
                           </div>
                        </div>
                    </div> 
                 )
                 :
                 <div className='text-mt-3' >No Flight For Given Filter</div>
            }

            <div className="bg-gray-px">
              <button type="button"
                className="mt-hover:bgfocus:ringsm"
                onClick={props.switch} id="mt-hover"
              >Cancel</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail

// onClick={props.switch} 