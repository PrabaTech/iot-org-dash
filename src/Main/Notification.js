import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComment } from '@fortawesome/free-solid-svg-icons';

const Notifications = () => {
  const [showCallDropdown, setShowCallDropdown] = useState(false);
  const [showSmsDropdown, setShowSmsDropdown] = useState(false);
  const callDropdownRef = useRef(null);
  const smsDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      callDropdownRef.current &&
      !callDropdownRef.current.contains(event.target)
    ) {
      setShowCallDropdown(false);
    }
    if (
      smsDropdownRef.current &&
      !smsDropdownRef.current.contains(event.target)
    ) {
      setShowSmsDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-2">Call Count</h3>
            <div className="flex items-center">
              <div className="mr-4">
                <p className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  4
                </p>
              </div>
              <div>
                <div className="relative" ref={callDropdownRef}>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md outline-none focus:outline-none"
                    onClick={() => setShowCallDropdown(!showCallDropdown)}
                  >
                    Check usage
                  </button>
                  {showCallDropdown && (
                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mon, 22 Jan 2024 17:42:37 GMT MqTT - Testing 9976006560, MqTT - Testing
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mon, 22 Jan 2024 17:42:35 GMT MqTT - Testing 9976006560, MqTT - Testing
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mon, 22 Jan 2024 17:42:33 GMT MqTT - Testing 9976006560, MqTT - Testing
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mon, 22 Jan 2024 17:42:32 GMT MqTT - Testing 9976006560, MqTT - Testing
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-green-500">
            <h3 className="text-lg font-semibold mb-2">SMS Count</h3>
            <div className="flex items-center">
              <div className="mr-4">
                <p className="flex items-center">
                  <FontAwesomeIcon icon={faComment} className="mr-2" />
                  4
                </p>
              </div>
              <div>
                <div className="relative" ref={smsDropdownRef}>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md outline-none focus:outline-none"
                    onClick={() => setShowSmsDropdown(!showSmsDropdown)}
                  >
                    Check usage
                  </button>
                  {showSmsDropdown && (
                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mon, 22 Jan 2024 17:42:37 GMT MqTT - Testing 9976006560, MqTT - Testing
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mon, 22 Jan 2024 17:42:35 GMT MqTT - Testing 9976006560, MqTT - Testing
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mon, 22 Jan 2024 17:42:33 GMT MqTT - Testing 9976006560, MqTT - Testing
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mon, 22 Jan 2024 17:42:32 GMT MqTT - Testing 9976006560, MqTT - Testing
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
