import React, { useState } from 'react';

const EditModal = ({handleClose,record,updateRecord}) => {

    console.log(record);

    const [updatedRecord,setUpdatedRecord] = useState(record);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRecord((prevRecord) => ({
          ...prevRecord,
          [name]: value,
        }));
      };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setUpdatedRecord((prevRecord) => ({
              ...prevRecord,
              profilePicture: reader.result,
            }));
          };
          reader.readAsDataURL(file);
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        updateRecord(updatedRecord);
      };
    


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md max-w-md w-full"> {/* Adjusted width */}
        <h2 className="text-lg text-white font-bold mb-4">Edit Record</h2>
        <form onSubmit={handleSubmit}>

            <input
            type="text"
            name="name"
            value={updatedRecord.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="mb-2 p-2 border rounded w-full"
            />
            <input
            type="email"
            name="email"
            value={updatedRecord.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="mb-2 p-2 border rounded w-full"
            />
            <input
            type="tel"
            name="phoneNumber"
            value={updatedRecord.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="mb-2 p-2 border rounded w-full"
            />
            <input
            type="date"
            name="dateOfBirth"
            value={updatedRecord.dateOfBirth}
            onChange={handleInputChange}
            placeholder="Date of Birth"
            className="mb-2 p-2 border rounded w-full"
            />
            <input
            type="text"
            name="city"
            value={updatedRecord.city}
            onChange={handleInputChange}
            placeholder="City"
            className="mb-2 p-2 border rounded w-full"
            />
            <input
            type="text"
            name="district"
            value={updatedRecord.district}
            onChange={handleInputChange}
            placeholder="District"
            className="mb-2 p-2 border rounded w-full"
            />
            <input
            type="text"
            name="province"
            value={updatedRecord.province}
            onChange={handleInputChange}
            placeholder="Province"
            className="mb-2 p-2 border rounded w-full"
            />
            <input
            type="text"
            name="country"
            value={updatedRecord.country}
            onChange={handleInputChange}
            placeholder="Country"
            className="mb-2 p-2 border rounded w-full"
            />
            <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            placeholder="Profile Picture"
            className="mb-2 p-2 border text-white rounded w-full"
            />
            
                <div className="flex justify-end mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Save</button>
                <button onClick={handleClose} className="px-4 py-2 bg-gray-300 text-gray-700 rounded">Cancel</button>
                </div>
        </form>

      </div>
    </div>
  );
};

export default EditModal;
