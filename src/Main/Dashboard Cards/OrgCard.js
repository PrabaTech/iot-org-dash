import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const scrollableContentStyle = {
    maxWidth: '900px',
    maxHeight: '800px',
    overflowY: 'auto',
};

const OrgCard = () => {
    const [filterOption, setFilterOption] = useState('All'); // State to track the selected filter option
    const [searchQuery, setSearchQuery] = useState(''); // State to track the search query

    // Function to handle change in the filter option
    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    // Function to handle change in the search query
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const organizations = [
        { name: "Site A - Mumbai", active: true },
        { name: "Site B - Mumbai", active: false },
        { name: "Site A - Chennai", active: true },
        { name: "Site A - Bengalore", active: true },
        { name: "Site A - Delhi", active: true },
        { name: "Site B - Delhi", active: true },
        { name: "Site A - Kerala", active: true },
        { name: "Site A - Pune", active: false },
        { name: "Site A - U.P", active: true },
        { name: "Site B - U.P", active: false },
        // Add more organizations as needed
    ];

    // Filter the organizations based on the selected option and search query
    const filteredOrganizations = organizations.filter(org => {
        if (filterOption === 'All') {
            return true; // Show all organizations
        } else if (filterOption === 'Active') {
            return org.active === true; // Show only active organizations
        } else if (filterOption === 'Inactive') {
            return org.active === false; // Show only inactive organizations
        }
    }).filter(org => {
        // Filter based on search query
        return org.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="container mx-auto">
            <div className=" bg-white shadow-md rounded-md p-2 border-t">
                <div className="flex justify-between items-center mb-3 p-3" style={{ backgroundColor: '#6082B6' }}>
                    <h5 className="text-white font-bold">Total Summary</h5>
                    <div className="flex items-center">
                        <form className="flex">
                            <input
                                type="search"
                                placeholder="Search By Site"
                                className="border border-gray-300 rounded-l px-2 py-1 focus:outline-none"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button type="submit" className="bg-neutral-400 text-white rounded-r px-4 py-1 focus:outline-none">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                        <select
                            className="border border-gray-300 rounded ml-2 px-2 py-1 focus:outline-none"
                            value={filterOption}
                            onChange={handleFilterChange}
                        >
                            <option value="All">All</option>
                            <option value="Active">Running</option>
                            <option value="Inactive">Issue</option>
                        </select>
                    </div>
                </div>

                <div style={scrollableContentStyle} className="overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredOrganizations.map(org => (
                            <div key={org.name} className="mb-4">
                                <div className="rounded-sm p-4 shadow-md border-t">
                                    <div className="flex justify-between items-center mb-2">
                                        <h5 className='font-bold'>{org.name}</h5>
                                        <span className={`px-2 py-1 rounded text-white ${org.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                            {org.active ? "Running" : "Issue"}
                                        </span>
                                    </div>
                                    <div className="mb-2">96########</div>
                                    <div className="mb-2">tatas@gmail.com</div>
                                    <div className="flex">
                                        {/* <div className="w-1/3"></div> */}
                                        <div className="w-1/3">Devices</div>
                                        <div className="w-1/3">Users</div>
                                    </div>
                                    <div className="flex">
                                        {/* <div className="w-1/3">05</div> */}
                                        <div className="w-1/3">05</div>
                                        <div className="w-1/3">10</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgCard;
