import React, { useState } from 'react';
import { Container, Card, CardBody, CardHeader, Form, FormControl, Button, InputGroup, FormSelect, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

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
        { name: "TATASteel", active: true },
        { name: "MRF", active: false },
        { name: "IndianOil", active: true },
        { name: "Hundai", active: true },
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
        <Container>
            <Card className='org-card'>
                <CardHeader style={{ backgroundColor: '#708090' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h5 style={{ color: 'white' }}>Total Summary</h5>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant="light" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faPlus} /> Create Site</Button>
                            <Form className="d-flex">
                                <InputGroup>
                                    <FormControl
                                        type="search"
                                        placeholder="Search By Organization"
                                        aria-label="Search"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                    <Button variant="light">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>
                                </InputGroup>
                            </Form>
                            <FormSelect
                                style={{ marginLeft: '10px', width: '120px' }}
                                value={filterOption}
                                onChange={handleFilterChange}
                            >
                                <option value="All">All</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </FormSelect>
                        </div>
                    </div>
                </CardHeader>
                <CardBody style={scrollableContentStyle}>
                    <Row>
                        {filteredOrganizations.map(org => (
                            <Col xs={12} md={6} className="mb-4" key={org.name}>
                                <Card>
                                    <CardBody>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <h5>{org.name}</h5>
                                            <span style={{ color: org.active ? 'green' : 'red', marginLeft: '10px' }}>{org.active ? "Active" : "Inactive"}</span>
                                        </div>
                                         <Row style={{marginLeft: '5px'}}> 96######## </Row>
                                         <Row style={{marginLeft: '5px'}}> tatas@gmail.com </Row>
                                        <Card.Text><Row>
                                            <Col>Total</Col>
                                            <Col>Active</Col>
                                            <Col>Inactive</Col>
                                        </Row></Card.Text>
                                        <Row>
                                            <Col>10</Col>
                                            <Col>8</Col>
                                            <Col>2</Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
};

export default OrgCard;
