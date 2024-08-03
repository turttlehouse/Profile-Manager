import React from 'react'
import Form from '../../components/Form/Form'
import Table from '../../components/Table/Table'
import { useNavigate } from 'react-router-dom'

const Home = ({setRecords,records}) => {

    const navigate = useNavigate();

    const handleFormSubmit = (data) =>{
        setRecords([...records,data])
    }
    
  return (

    <>
      <div className="container mx-auto p-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 min-w-[300px]">
          <Form onSubmit={handleFormSubmit} />
        </div>
        <div className="flex-1 min-w-[300px]">
          <Table />
        <button className='mt-4 bg-black text-white rounded px-4 py-2' onClick={()=>navigate('/profiles')}>View All Profiles</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home