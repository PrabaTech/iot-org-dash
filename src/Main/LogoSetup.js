// Profile.js
import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Image } from 'react-bootstrap';
import Profile from './Profile'



const LogoSetup = ({ onLogoChange }) => {
    const [logo, setLogo] = useState(null);
    const [height, setHeight] = useState(40); // Default height
    const [width, setWidth] = useState(160); // Default width

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleHeightChange = (e) => {
        const newHeight = parseInt(e.target.value);
        if (!isNaN(newHeight) && newHeight <= 60) {
            setHeight(newHeight);
        }
    };

    const handleWidthChange = (e) => {
        const newWidth = parseInt(e.target.value);
        if (!isNaN(newWidth) && newWidth <= 200) {
            setWidth(newWidth);
        }
    };

    const handleSave = () => {
        if (logo) {
            onLogoChange(logo, width, height);
        }
    };

    return (
        <div className="profile-container p-1">
            <Profile />
            <Card className="mt-4">
                <Card.Header className="text-center">
                    <h4>Logo Setup</h4>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} controlId="logoInput">
                            <Form.Label column sm="3">Select Logo:</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="heightInput">
                            <Form.Label column sm="3">Height (max 60px):</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    type="number"
                                    value={height}
                                    onChange={handleHeightChange}
                                    max="60"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="widthInput">
                            <Form.Label column sm="3">Width (max 200px):</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    type="number"
                                    value={width}
                                    onChange={handleWidthChange}
                                    max="200"
                                />
                            </Col>
                        </Form.Group>
                        <Button variant="primary" onClick={handleSave} className="mt-3">Save</Button>
                    </Form>
                    {logo && (
                        <div className="mt-4 text-center">
                            <h5>Preview:</h5>
                            <Image src={logo} alt="Logo Preview" style={{ height: `${height}px`, width: `${width}px` }} thumbnail />
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default LogoSetup;
