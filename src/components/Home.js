import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

import UploadForm from './UploadForm';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
    

class HomePage extends React.Component{
    constructor(props) {
        super(props);
      }


    render(){
    return (
        <div>
        <div style={{marginTop:"1%", marginLeft: "25%", marginRight: "25%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h1>Upload Flight</h1>
        </div>

        <div style={{marginTop:"0.5%" , marginLeft: "25%", marginRight: "25%"}}>
            <Container>
                <Card id='card' bg="light">
                    <Card.Header>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            Upload a Flight Log File to Database
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <UploadForm />
                    </Card.Body>
                </Card>
            </Container>
        </div>

        </div>
        );
    }
}

export default HomePage;
