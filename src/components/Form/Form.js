import React, {Component} from "react";
import {FormGroup, ControlLabel, FormControl} from "react-bootstrap";

let marked = require("markdown");
class Form extends Component {
    state = {
        markdown: ""
    }
// to update value dynamically use built in javascript method onChange
    updateMarkdown = function(markdown) {
        this.setState({markdown: markdown});
    }
    render() {
        let {markdown} = this.state;
        console.log(markdown);
        return (
            <div className="container">
                <div>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Markdown Area</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}/>
                    </FormGroup>
                </div>
                <div>
                    <h2>Markdown Output</h2>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Form;