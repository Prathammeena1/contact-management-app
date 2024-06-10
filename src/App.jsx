import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold">WooFlel</h1>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full mr-2" />
            <span>Randall Cohen</span>
          </div>
        </header>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Team Members</h2>
            <div>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-l-lg">All</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">My Team</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg p-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-400 text-6xl">+</span>
              </div>
              <p className="text-xl font-semibold">Add New Member</p>
              <input type="text" placeholder="Addie Barton" className="border rounded px-4 py-2 mt-2 w-full text-center" />
              <input type="email" placeholder="addie.barton@gmail.com" className="border rounded px-4 py-2 mt-2 w-full text-center" />
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Add</button>
            </div>
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <img src={`https://via.placeholder.com/100?text=${index + 1}`} alt="Member" className="rounded-full mb-4 w-24 h-24" />
                <p className="text-xl font-semibold">Member {index + 1}</p>
                <p className="text-gray-500">member{index + 1}@gmail.com</p>
                <div className="flex mt-4 space-x-2">
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Assign</button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
