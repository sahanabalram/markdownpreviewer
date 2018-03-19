import React, {Component} from "react";
import {FormGroup, ControlLabel, FormControl} from "react-bootstrap";

let marked = require("markdown");
class Form extends Component {
    render() {
        return (
            <div className="container">
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Markdown Area</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Enter Markdown"/>
                </FormGroup>
            </div>
        )
    }
}

export default Form;