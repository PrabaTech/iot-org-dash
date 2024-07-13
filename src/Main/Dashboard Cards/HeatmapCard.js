import React, { useState } from 'react';
import HeatMap from 'react-heatmap-grid';

const scrollableContentStyle = {
    maxWidth: '900px',
    maxHeight: '800px',
    overflowY: 'auto',
};

const HeatmapCard = () => {
    const [modalState, setModalState] = useState({ showModal: false, message: '' });
    const [selectedOption, setSelectedOption] = useState(null);

    const hdataOptions = {
        Mumbai: splitDataIntoChunks([
            1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0
        ]),
        Chennai: splitDataIntoChunks([
            0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1
        ]),
        Delhi: splitDataIntoChunks([
            1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1
        ]),
        Kerala: splitDataIntoChunks([
            0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1
        ]),
    };

    function splitDataIntoChunks(array, chunkSize = 21) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };

    const handleCellClick = (x, y) => {
        if (selectedOption && hdataOptions[selectedOption]) {
            const value = hdataOptions[selectedOption][y][x];
            const message = getMessage(value);
            setModalState({ showModal: true, message });
        }
    };

    const getMessage = (value) => {
        if (value === 0) {
            return 'Healthy';
        } else if (value === 1) {
            return 'Alert';
        }
    };

    const handleClose = () => setModalState({ showModal: false, message: '' });

    return (
        <div className="container mx-auto">
            <div className="bg-white shadow-md rounded-md p-2 border-t">
                <div className="flex justify-between items-center mb-3 p-3 shadow-sm">
                    <div className="flex">
                        <span className="mr-4 font-bold">
                            <div className="bg-red-500 w-4 h-4 inline-block mr-1" />
                            Alert
                        </span>
                        <span className="mr-4 font-bold">
                            <div className="bg-green-500 w-4 h-4 inline-block mr-1" />
                            Healthy
                        </span>
                        <span className="mr-4 font-bold">
                            <div className="bg-gray-500 w-4 h-4 inline-block mr-1" />
                            Error
                        </span>
                    </div>
                    <div>
                        <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none" onChange={handleOptionChange}>
                            <option value="">Sites</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Kerala">Kerala</option>
                        </select>
                    </div>
                </div>
                <div style={scrollableContentStyle} className="overflow-y-auto">
                    {selectedOption && hdataOptions[selectedOption] ? (
                        <HeatMap
                            data={hdataOptions[selectedOption]}
                            xLabels={Array.from({ length: Math.min(hdataOptions[selectedOption][0].length, 26) }, () => '')}
                            yLabels={Array.from({ length: hdataOptions[selectedOption].length }, () => '')}
                            squares
                            height={40}
                            width={40}
                            onClick={handleCellClick}
                            cellStyle={(background, value) => ({
                                background: value === 0 ? '#00A36C' : value === 1 ? '#FF0000' : '#FFFFFF',
                                fontSize: '11px',
                                display: 'inline-flex',
                                width: '30px',
                                height: '30px',
                            })}
                        />
                    ) : (
                        Object.keys(hdataOptions).map((option) => (
                            <div key={option} className="mb-4">
                                <h5>{option}</h5>
                                <HeatMap
                                    data={hdataOptions[option]}
                                    xLabels={Array.from({ length: Math.min(hdataOptions[option][0].length, 26) }, () => '')}
                                    yLabels={Array.from({ length: hdataOptions[option].length }, () => '')}
                                    squares
                                    height={40}
                                    width={40}
                                    onClick={handleCellClick}
                                    cellStyle={(background, value) => ({
                                        background: value === 0 ? '#00A36C' : value === 1 ? '#FF0000' : '#FFFFFF',
                                        fontSize: '11px',
                                        display: 'inline-flex',
                                        width: '30px',
                                        height: '30px',
                                    })}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className={modalState.showModal ? 'block' : 'hidden'}>
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-md p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Device Info</h2>
                    </div>
                    <div>
                        <p>Status: {modalState.message}</p>
                        <p>Data:</p>
                        <p>IMEI:</p>
                        <p>Site: {selectedOption}</p>
                        <p>Location:</p>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeatmapCard;
