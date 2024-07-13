import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const getBadge = (status) => {
  switch (status) {
    case 'Active':
      return 'bg-green-500';
    case 'Inactive':
      return 'bg-red-500';
    case 'Pending':
      return 'bg-yellow-500';
    case 'Banned':
      return 'bg-gray-500';
    default:
      return 'bg-blue-500';
  }
};

const Device = () => {
  const [large, setLarge] = useState(false);
  const [fields] = useState([
    { key: 'Name', label: 'Name' },
    { key: 'Model Number', label: 'Model Number' },
    { key: 'SIM Number', label: 'SIM Number' },
    { key: 'Discription', label: 'Discription' },
    { key: 'Location', label: 'Location' },
  ]);

  const device1Data = [
    { reportDate: '1', Name: 'Device A', 'Model Number': '#############', 'SIM Number': 1234567890, 'Discription': 'Some Details', Location: 'Chennai', status: 'Active' },
    { reportDate: '2', Name: 'Device B', 'Model Number': '#############', 'SIM Number': 1234567890, 'Discription': 'Some Details', Location: 'Mumbai', status: 'Inactive' },
    { reportDate: '3', Name: 'Device C', 'Model Number': '#############', 'SIM Number': 1234567890, 'Discription': 'Some Details', Location: 'Delhi', status: 'Pending' },
    { reportDate: '4', Name: 'Device D', 'Model Number': '#############', 'SIM Number': 1234567890, 'Discription': 'Some Details', Location: 'Kerala', status: 'Banned' },
    { reportDate: '4', Name: 'Device E', 'Model Number': '#############', 'SIM Number': 1234567890, 'Discription': 'Some Details', Location: 'Bangalore', status: '' },
  ];

  const toggleEditModal = () => {
    setLarge(!large);
  };

  return (
    <div className="report p-3">
      <div className="mb-3">
        <div className="shadow-sm rounded-lg p-2 bg-gray-500">
          <div className="flex flex-wrap items-center">
            <h3 className="text-white px-3 py-1 rounded-md mr-2 font-bold">
              Device List
            </h3>
            <form className="flex">
            <input
              type="search"
              placeholder="Search By Device"
              className="border border-gray-300 rounded-l px-2 py-1 focus:outline-none"
            // value
            // onChange
            />
            <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-1 focus:outline-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
            <div className="w-full md:w-1/2 flex justify-end">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2" onClick={toggleEditModal}>
                Edit Device
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                {fields.map((field, index) => (
                  <th key={index} className="px-4 py-2 border-b">
                    {field.label}
                  </th>
                ))}
                <th className="px-4 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {device1Data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{item.reportDate}</td>
                  {fields.map((field, idx) => (
                    <td key={idx} className="px-4 py-2 border-b">
                      {item[field.key]}
                    </td>
                  ))}
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-white ${getBadge(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {large && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-lg font-semibold">Edit Device</h5>
              <button onClick={toggleEditModal} className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {/* Add your edit form components here */}
            </div>
            <div className="flex justify-end p-4 border-t">
              <button className="bg-gray-500 text-white py-1 px-4 rounded mr-2" onClick={toggleEditModal}>
                Close
              </button>
              <button className="bg-blue-500 text-white py-1 px-4 rounded">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Device;
