import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faFileInvoice, faBell, faAddressCard, faTachographDigital, faReceipt, faGears, faIndustry } from '@fortawesome/free-solid-svg-icons';
import Logo from './img/sife.png';
import Dashboard from './Main/Dashboard';
import Site from './Main/Site';
import Report from './Main/Report';
import Notification from './Main/Notification';
import LogoSetup from './Main/LogoSetup';
import Device from './Main/Device';
import DeviceConfig from './Main/DeviceConfig';
import Invoice from './Main/Invoice';

const Navigation = () => {
    const { section } = useParams();
    const [logo, setLogo] = useState(Logo);
    const [logoHeight, setLogoHeight] = useState(40);
    const [logoWidth, setLogoWidth] = useState(160);

    const handleLogoChange = (newLogo, newWidth, newHeight) => {
        setLogo(newLogo);
        setLogoHeight(newHeight);
        setLogoWidth(newWidth);
    };

    const renderSectionContent = () => {
        switch (section) {
            case 'dashboard':
                return <Dashboard />;
            case 'site':
                return <Site />;
            case 'device':
                return <Device />;
            case 'deviceconfig':
                return <DeviceConfig />;
            case 'report':
                return <Report />;
            case 'invoice':
                return <Invoice />;
            case 'notifications':
                return <Notification />;
            case 'profile':
                return <LogoSetup onLogoChange={handleLogoChange} />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div>
            <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
                <div className="container mx-auto flex items-center justify-between py-4">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Your Logo"
                            height={logoHeight}
                            width={logoWidth}
                            className="d-inline-block align-top"
                        />
                    </Link>
                    <div className="flex items-center">
                        <Link to="/dashboard" className="mx-4 text-gray-600 hover:text-blue-600 font-bold"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link>
                        <Link to="/device" className="mx-4 text-gray-600 hover:text-blue-600 font-bold"><FontAwesomeIcon icon={faTachographDigital} /> Devices</Link>
                        <Link to="/site" className="mx-4 text-gray-600 hover:text-blue-600 font-bold"><FontAwesomeIcon icon={faIndustry} /> Site</Link>
                        <Link to="/deviceconfig" className="mx-4 text-gray-600 hover:text-blue-600 font-bold"><FontAwesomeIcon icon={faGears} /> Device Config</Link>
                        <Link to="/report" className="mx-4 text-gray-600 hover:text-blue-600 font-bold"><FontAwesomeIcon icon={faReceipt} /> Report</Link>
                        <Link to="/invoice" className="mx-4 text-gray-600 hover:text-blue-600 font-bold"><FontAwesomeIcon icon={faFileInvoice} /> Invoice</Link>
                        {/* <Link to="" className="mx-4 text-gray-600 hover:text-blue-600">Credits: 100</Link> */}
                        <Link to="/notifications" className="mx-4 text-gray-600 hover:text-blue-600 font-bold"><FontAwesomeIcon icon={faBell} /></Link>
                        <Link to="/profile" className="mx-4 text-gray-600 hover:text-blue-600 font-bold"><FontAwesomeIcon icon={faAddressCard} /> Profile</Link>
                    </div>
                </div>
                {/* <div className="container mx-auto flex items-center justify-between py-4">
                    <div className="flex items-center">
                       
                    </div>
                    <div className="flex items-center">
                        
                    </div>
                </div> */}
            </header>

            <main className="container mx-auto mt-28 pt-15">
                {renderSectionContent()}
            </main>
        </div>
    );
};

export default Navigation;
