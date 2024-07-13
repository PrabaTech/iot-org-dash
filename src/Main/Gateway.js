// Gateway.js
import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Container } from 'react-bootstrap';

const Gateway = () => {
    return (
          
        <Card>
            <Container>
                <CardHeader>Gateway<Button variant='success' style={{alignItem: 'flex-end'}}>Add Gateway</Button></CardHeader>
                <CardBody>
                    hello
                    <hr/>
                </CardBody>
                <CardFooter></CardFooter>
            </Container>
        </Card>
    );
};

export default Gateway;
