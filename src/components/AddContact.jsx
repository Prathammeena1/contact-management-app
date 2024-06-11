import React from "react";

const AddContact = () => {
  return (
    <div className="bg-white rounded-lg w-full overflow-auto p-6 right">
      <div className="flex justify-between items-center mb-6 w-full px-1">
        <div className="logo text-3xl font-bold">ContactKeeper</div>
      </div>
      <div className="h-[75vh] w-full flex justify-center items-center">
        <div className="col-span-1 min-w-[30vw] min-h-[25vw] flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg p-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-gray-400 text-6xl">+</span>
          </div>
          <p className="text-xl font-semibold">Add New Member</p>
          <input
            type="text"
            placeholder="Addie Barton"
            className="border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <input
            type="email"
            placeholder="addie.barton@gmail.com"
            className="border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
