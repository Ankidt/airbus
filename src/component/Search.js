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
        <div className='flex items-center justify-center flex-col' >
            <div className='flex flex-row1 ' id="block">
                <h1 className='text-5xl my-3 text-white font-medium place-self-start' id='start' >START JOURNEY</h1>
                <div className='h-[7rem] rounded-lg bg-white flex items-center justify-center p-5 'id='card-div' >
                 
                    <div className='flex flex-col items-center justify-center mx-3 'id='from'>
                        <p className='place-self-start text-slate-400 text-sm ' >From</p>
                        <input type="text" onChange={(e)=>{start(e.target.value)}}  placeholder='DELHI' className='border-b-4 ' />
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 'id='to'>
                        <p className='place-self-start text-slate-400 text-sm ' >To</p>
                        <input type="text" onChange={(e)=>{last(e.target.value)}} placeholder='MUMBAI' className='border-b-4 ' />
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 'id='depart'>
                        <p className='place-self-start text-slate-400 text-sm ' >Depart</p>
                        <input type="date" className='border-b-4 ' onChange={handleDep} />
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 'id='return'>
                        <p className='place-self-start text-slate-400 text-sm ' >Return</p>
                        <input type="date" className='border-b-4 ' onChange={handleRet} />
                    </div>
                    

                    <button className='bg-amber-200 py-2 px-8 rounded-lg text-base shadow-lg ' onClick={switch1} id="search" >
                        Search
                    </button>
                    
                 
                </div>
            </div>
        </div>
    )
}

export default Search