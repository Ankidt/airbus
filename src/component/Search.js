import React ,{ useContext } from 'react'
import { MediumContext } from './context/MediumContextProvider';
import "./style/Style.css";




const Search = ({start , last , switch1}) => {

    const { setdes , setret  } = useContext(MediumContext)

    function handleDep(e){
           setdes(e.target.value);
    }
    function handleRet(e){
        setret(e.target.value);
    }

    return (
        <div className='flex items-flex-col' id='box'>
            <div className='flex flex-row1 ' id="block">
                
                <div className='whiteitems-center'id='card-div' >
                 
                    <div className='flex items center mx-3 'id='from'>
                        <p className='text-slate text-sm ' >From</p>
                        <input type="text" onChange={(e)=>{start(e.target.value)}}  placeholder='DELHI' className='border-b-4 ' />
                    </div>
                    <div className='flex-center 'id='to'>
                        <p className='place-self-start  ' >To</p>
                        <input type="text" onChange={(e)=>{last(e.target.value)}} placeholder='MUMBAI' className='border-b-5 ' />
                    </div>
                    <div className='flex mx-3 'id='depart'>
                        <p className='text-slate1' >Depart</p>
                        <input type="date" className='border-b-4 ' onChange={handleDep} />
                    </div>
                    <div className='center-justify 'id='return'>
                        <p className='text-slate' >Return</p>
                        <input type="date" className='border-b-4 ' onChange={handleRet} />
                    </div>
                    

                    <button className='rounded-lg' onClick={switch1} id="search" >
                        Search
                    </button>
                    
                 
                </div>
            </div>
        </div>
    )
}

export default Search