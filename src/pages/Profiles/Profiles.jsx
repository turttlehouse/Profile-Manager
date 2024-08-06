import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profiles = ({ records }) => {

  // State to keep track of visible profiles
  const [visibleCount, setVisibleCount] = useState(3); 
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Profiles</h1>
      <button
        onClick={handleGoBack}
        className="px-4 mb-2 bg-blue-500 text-white rounded"
      >
        Go Back
      </button>

      {
        records && records.length > 0 ? (
          <>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {records.slice(0, visibleCount).map((record,index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-xl flex flex-col items-center">
                <img
                  src={record.profilePicture || 'default-image-path.jpg'}
                  alt={`${record.name}'s profile`}
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h2 className="text-lg font-bold">{record.name}</h2>
                <p className="mb-1"><strong>Email:</strong> {record.email}</p>
                <p className="mb-1"><strong>Phone:</strong> {record.phone}</p>
                <p className="mb-1"><strong>Date of Birth:</strong> {record.dateOfBirth}</p>
                <p className="mb-1"><strong>City:</strong> {record.city}</p>
                <p className="mb-1"><strong>District:</strong> {record.district}</p>
                <p className="mb-1"><strong>Province:</strong> {record.province}</p>
                <p className="mb-1"><strong>Country:</strong> {record.country}</p>
              </div>
            ))}
          </div>
          {visibleCount < records.length && (
            <button
              onClick={handleLoadMore}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Load More...
            </button>
          )}
        </>

        )
        :
        (
          <p className='text-center text-3xl font-bold'>No profiles found</p>
        )
      }
    </div>
  );
};

export default Profiles;
