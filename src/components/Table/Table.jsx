import React, { useState } from 'react';
import EditModal from '../Modal/EditModal';

const Table = ({ records,setRecords}) => {

  const [isEditing,setIsEditing] = useState(false);

  const handleDelete = (index)=>{
    // console.log('delete clicked');

    const updatedRecords = records.filter((item, i)=> i !== index);
    setRecords(updatedRecords);
    
  }

  const [currentRecord,setCurrentRecord] = useState(null);

  const handleEdit =(index)=>{
    
    // console.log('edit clicked');

    setCurrentRecord({...records[index],index});
    
    setIsEditing(true);
  }


  const updateRecord = (updatedRecord)=>{

    const updatedRecords = records.map((record, index) =>
      index === updatedRecord.index ? updatedRecord : record
    );
    setRecords(updatedRecords);
    setIsEditing(false);

  }


   // Pagination state variables
   const [currentPage, setCurrentPage] = useState(0);
   const recordsPerPage = 5;

  //Getting the records to display for the current page
  const currentRecords = records.slice(
    currentPage * recordsPerPage,
    (currentPage + 1) * recordsPerPage
  );

  const handleNextPage = ()=>{
    if((currentPage + 1) * recordsPerPage < records.length)
    {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePreviousPage = ()=>{
    if(currentPage > 0)
    {
      setCurrentPage(currentPage-1);
    }
  }
  
  return (
    <>
    {
      isEditing && (
        <EditModal handleClose={()=>setIsEditing(false)} record={currentRecord} updateRecord={updateRecord}/>
      )
    }
      <section className="container mt-10">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-x-3">
                          <span>Profile</span>
                        </div>
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Name
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Email
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Date of Birth
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Country
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {currentRecords.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      currentRecords.map((record, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <img className="object-cover w-8 h-8 rounded-full" src={record.profilePicture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'} alt="Profile" />
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{record.name}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{record.email}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{record.dateOfBirth}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{record.country}</td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <button onClick={()=>handleEdit(index)} className="bg-blue-500 text-white rounded px-2 py-1  font-bold transition-colors duration-200 dark:hover:bg-blue-600 dark:text-gray-300 focus:outline-none">
                                Edit
                              </button>
                              <button onClick={()=>handleDelete(index)} className="bg-red-500 text-white rounded px-1 py-1 font-bold transition-colors duration-200 hover:bg-red-600 focus:outline-none">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">

          <button onClick={handlePreviousPage}   disabled={currentPage === 0} className="flex items-center px-3 py-1 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
              Previous
          </button>

          <button onClick={handleNextPage} disabled={(currentPage + 1) * recordsPerPage >= records.length} className="flex items-center px-5 py-1 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
              Next
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>

        </div>
      </section>
    </>
  );
}

export default Table;
