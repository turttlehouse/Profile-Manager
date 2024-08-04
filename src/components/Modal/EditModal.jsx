import React from 'react';

const EditModal = () => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md max-w-md w-full"> {/* Adjusted width */}
        <h2 className="text-lg text-white font-bold mb-4">Edit Record</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="district"
          placeholder="District"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="province"
          placeholder="Province"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="file"
          name="profilePicture"
          placeholder="Profile Picture"
          className="mb-2 p-2 border text-white rounded w-full"
        />
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Save</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
