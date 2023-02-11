import React, { useState} from 'react'

import Search from '../component/Search'
import Available from './Available'
import Detail from './Detail'

const Dashboard = () => {


  const [OpenModal, setOpenModal] = useState(false)
  const [From, setFrom] = useState('')
  const [Last, setLast] = useState('')

  return (
    <div className='w-cover'>
        <div className='flex h-screen flex-evenly' >
        <Search start={setFrom} last={setLast} switch1={() => setOpenModal(true)} />
       {!OpenModal&& <Available/>}
        </div>
        {OpenModal && <Detail start={From} Last={Last} switch={() => setOpenModal(false)} />} 

    </div>
  )
}

export default Dashboard