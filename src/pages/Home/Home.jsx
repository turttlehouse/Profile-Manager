import React from 'react';
import Form from '../../components/Form/Form';
import Table from '../../components/Table/Table';
import { useNavigate } from 'react-router-dom';

const Home = ({ setRecords, records }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto p-1">

        <div className="flex flex-col justify-between md:flex-row">

          <div className="flex-1 min-w-[300px]">
            <Form setRecords={setRecords} records={records} />
          </div>

          <div className="flex-1 min-w-[300px]">
            <Table setRecords={setRecords} records={records} />
            <button
              className='mt-4 flex gap-2 bg-blue-600 text-white text-sm rounded px-4 py-1'
              onClick={() => navigate('/profiles')}
            >
              View All Profiles
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
             </svg>
            </button>
          </div>

        </div>
        
      </div>
    </>
  );
};

export default Home;
