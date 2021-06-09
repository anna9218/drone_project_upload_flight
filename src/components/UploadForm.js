// import {Form, Accordion, Card, Container, Button} from 'react-bootstrap'
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import * as Service from '../services/communication';
import { parser } from './TypeParser';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    BrowserRouter as Router,
    Route,
    useParams
  } from 'react-router-dom'


var parameters = {};    // global variable to hold the parameters and their corresponding types



function Params() {
    const { params } = useParams();     // params&age={int}&weather={str}
    var params_array = params.split("&");
    params_array.shift();
    var params2 = params_array.map(item => {
        var param_end_idx = item.indexOf("{")
        var param = item.slice(0, param_end_idx);
        var type = item.slice(param_end_idx+1, -1);
        return [param, type];
        }
    );

    // TODO [in the future] - consider splitting into separate components (generic) - each component 
    var MappingItems = params2.map(([param, type]) => 
    <div>
        <Form>
            <Form.Group as={Row}>
            <Form.Label column sm="4">{param}</Form.Label>
            <Col>
                <Form.Control id={param} 
                    onChange={event => {
                    // parse the parameteres according to the input type
                    parameters[param] = parser(param, type, event.target.value);
                }}
                type="text" placeholder="" />
            </Col>  
        </Form.Group>
        </Form>
     </div>
    );
    console.log(parameters);
    return MappingItems;
}

class UploadForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            flightLog: '',
            fileName: 'Click here to upload',
            locationTags: 'Enter the location tags',
        };
    }


    uploadHandler(){
        console.log(parameters);
        this.setState({fileName: 'Click here to upload'});
        
        const promise = Service.upload_flight(this.state.flightLog, this.state.locationTags, parameters);

        promise.then((data) => {
            console.log(data['data']);
            if(data['data']!=null) {
                // TODO - popup window - check
                alert(data['msg']);
    }})
        // this.setState({locationTags: 'Enter the location tags'});
    }

    onFileChange(event){
        event.preventDefault();
        if (event.target.files.length == 1) {
            this.setState({flightLog: event.target.files[0]});
            this.setState({fileName: event.target.files[0].name});
        }
        else {
            // TODO - add support for more than one file (save to list and create name string)
        }
    }

    

    render(){
        return (
            <div>
            <Form id='uploadform'>
                <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input isValid multiple onChange={(event => {this.onFileChange(event)})}/>
                <Form.File.Label data-browse="Browse">
                    {this.state.fileName}
                </Form.File.Label>
                </Form.File>
                </Form>

                <br />

                <Form.Group as={Row}>
                    <Form.Label column sm="4">Location Tags:</Form.Label>
                    <Col>
                        <Form.Control id='location-tags' onChange={event => {this.setState({locationTags: event.target.value})}} type="text" placeholder={this.state.locationTags} />
                    </Col>  
                </Form.Group>

                <div>
                    <Router>
                        <React.Fragment>
                            <Route path='/:params'>
                            <Params />
                            </Route>
                        </React.Fragment>
                    </Router>
                </div>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button id='upload-btn' variant="success" onClick= {(() => {this.uploadHandler()})}>
                        Upload
                    </Button>
                </div>
            
            </div>
        );
    }
}


export default UploadForm;
