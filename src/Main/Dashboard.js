import { useState } from 'react';
// Consider converting styles to Tailwind CSS
import OrgCard from './Dashboard Cards/OrgCard';
import HeatmapCard from './Dashboard Cards/HeatmapCard';
import SiteCard from './Dashboard Cards/SiteCard';

const Dashboard = () => {
    const [showOrgCard, setShowOrgCard] = useState(true); // State to toggle between OrgCard and EmptyCard

    // const handleSiteCardClick = () => {
    //     setShowOrgCard(false); // Set showOrgCard to false when Site Card is clicked
    // };

    const handleOrgCardClick = () => {
        setShowOrgCard(true); // Set showOrgCard to true when Organization Card is clicked
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1">
                    <div className="bg-white shadow-md rounded-md p-3 cursor-pointer border-t-4 border-cyan-500" onClick={handleOrgCardClick}>
                        <h2 className="mb-2 font-bold" style={{ color: '#1565C0' }}>Management</h2>
                        <div className="grid grid-cols-2 gap-2">
                            <div><h6>Total Sites</h6><h4 className="text-gray-600 font-bold text-lg">50</h4></div>
                            <div><h6>Total Users</h6><h4 className="text-gray-600 font-bold text-lg">100</h4></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="bg-white shadow-md rounded-md p-3 border-t-4 border-cyan-500">
                        <h2 className="text-blue-600 mb-2 font-bold" style={{ color: '#1565C0' }}>Device Status</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <div><h6>Total Device</h6><h3 className="text-blue-600 font-bold text-lg">50</h3></div>
                            <div><h6>Active</h6><h3 className="text-green-600 font-bold text-lg">20</h3></div>
                            <div><h6>Inactive</h6><h3 className="text-red-600 font-bold text-lg">10</h3></div>
                            <div><h6>Available</h6><h3 className="text-teal-600 font-bold text-lg">12</h3></div>
                            <div><h6>In-Progress</h6><h3 className="text-gray-600 font-bold text-lg">03</h3></div>
                            <div><h6>Suspended</h6><h3 className="text-pink-700 font-bold text-lg">05</h3></div>
                            <div><h6>Normal Device</h6><h3 className="text-green-400 font-bold text-lg">17</h3></div>
                            <div><h6>Alert Device</h6><h3 className="text-red-400 font-bold text-lg">03</h3></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="bg-white shadow-md rounded-md p-3 cursor-pointer border-t-4 border-cyan-500">
                        <h2 className="text-blue-600 mb-2 font-bold" style={{ color: '#1565C0' }}>Alert</h2>
                        <div className="grid grid-cols-3 gap-2">
                            <div><h6>Calls</h6><h3 className="text-gray-600 font-bold text-lg">40</h3></div>
                            <div><h6>SMS</h6><h3 className="text-gray-600 font-bold text-lg">30</h3></div>
                            <div><h6>Mail</h6><h3 className="text-gray-600 font-bold text-lg">10</h3></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        {showOrgCard ? <OrgCard /> : <SiteCard />}
                    </div>
                    <div className="col-span-1">
                        <HeatmapCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
