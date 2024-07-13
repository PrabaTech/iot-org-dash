import React, { useState, useRef } from 'react';

const getBadge = (status) => {
  switch (status) {
    case 'Active':
      return 'bg-green-500';
    case 'Inactive':
      return 'bg-gray-500';
    case 'Pending':
      return 'bg-yellow-500';
    case 'Banned':
      return 'bg-red-500';
    default:
      return 'bg-blue-500';
  }
};

const Report = () => {
  const tableRef = useRef(null);
  const [large, setLarge] = useState(false);
  const [fields, setFields] = useState([
    { key: 'Zone 1', label: 'Zone 1' },
    { key: 'Zone 2', label: 'Zone 2' },
    { key: 'Zone 3', label: 'Zone 3' },
    { key: 'Zone 4', label: 'Zone 4' },
    { key: 'Zone 5', label: 'Zone 5' },
    { key: 'Zone 6', label: 'Zone 6' },
    { key: 'Zone 7', label: 'Zone 7' },
    { key: 'Zone 8', label: 'Zone 8' },
  ]);

  const device1Data = [
    { reportDate: '1/1/2024', 'Zone 1': 0, 'Zone 2': 1, 'Zone 3': 1, 'Zone 4': 1, 'Zone 5': 1, 'Zone 6': 0, 'Zone 7': 1, 'Zone 8': 1 },
    { reportDate: '2/1/2024', 'Zone 1': 0, 'Zone 2': 1, 'Zone 3': 1, 'Zone 4': 1, 'Zone 5': 1, 'Zone 6': 0, 'Zone 7': 1, 'Zone 8': 1 },
    { reportDate: '3/1/2024', 'Zone 1': 0, 'Zone 2': 1, 'Zone 3': 1, 'Zone 4': 1, 'Zone 5': 1, 'Zone 6': 0, 'Zone 7': 1, 'Zone 8': 1 },
  ];

  const device2Data = [
    { reportDate: '1/2/2024', 'Zone 1': 0, 'Zone 2': 0, 'Zone 3': 1, 'Zone 4': 1, 'Zone 5': 0, 'Zone 6': 0, 'Zone 7': 1, 'Zone 8': 1 },
    { reportDate: '2/2/2024', 'Zone 1': 0, 'Zone 2': 0, 'Zone 3': 1, 'Zone 4': 1, 'Zone 5': 0, 'Zone 6': 0, 'Zone 7': 1, 'Zone 8': 1 },
    { reportDate: '3/2/2024', 'Zone 1': 0, 'Zone 2': 1, 'Zone 3': 0, 'Zone 4': 1, 'Zone 5': 0, 'Zone 6': 0, 'Zone 7': 0, 'Zone 8': 0 },
  ];

  const [reportData, setReportData] = useState([]);
  const [reportDate, setReportDate] = useState('');
  const [userDeviceLink, setUserDeviceLink] = useState('');
  const [loading, setLoading] = useState(false);

  const updateUserDeviceLink = (e) => {
    const selectedDevice = e.target.value;
    setUserDeviceLink(selectedDevice);

    if (selectedDevice === 'device1') {
      setReportData(device1Data);
    } else if (selectedDevice === 'device2') {
      setReportData(device2Data);
    } else {
      setReportData([]);
    }
  };

  const updateReportDate = (e) => {
    setReportDate(e.target.value);
  };

  const handleRefresh = () => {
    // Implement refresh functionality
  };

  const toggleEditModal = () => {
    setLarge(!large);
  };

  return (
    <div className="report p-3">
      {loading && (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="mb-3">
        <div className="shadow-sm rounded-lg p-2 bg-sky-500">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 flex">
            <div className="w-full md:w-1/4 mb-4 md:mb-0 flex">
              <select
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none"
                value={userDeviceLink}
                onChange={updateUserDeviceLink}
              >
                <option value="" disabled hidden>
                  Select Device
                </option>
                <option value="device1">Device 1</option>
                <option value="device2">Device 2</option>
              </select>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0 flex">
              <input
                type="date"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={reportDate}
                onChange={updateReportDate}
              />
            </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2" onClick={handleRefresh}>
                Refresh
              </button>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded-md" onClick={toggleEditModal}>
                Export .xlsx
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        {/* <div className="bg-white shadow-sm rounded-lg p-4"> */}
        <div className="overflow-x-auto">
          <table ref={tableRef} className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Report Date</th>
                {fields.map((field, index) => (
                  <th key={index} className="px-4 py-2 border-b">
                    {field.label}
                  </th>
                ))}
                <th className="px-4 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {reportData.length > 0 ? (
                reportData.map((item, index) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan={fields.length + 2} className="text-center px-4 py-2 border-b">
                    Select Your Device
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* </div> */}
      </div>

      {large && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-lg font-semibold">Edit Report</h5>
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

export default Report;
