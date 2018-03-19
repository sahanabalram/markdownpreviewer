import React, {Component} from "react";

const marked = require("marked");
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: '\nHeading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n ' +
                    '\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a l' +
                    'ine to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ' +
                    '~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nN' +
                    'umbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the rei' +
                    'gn---in\nSpain.\n\n *[Sahana Balram](https://freecodecamp.com/sahanabalram)*'
        };
        this.displayMarkdown = this
            .displayMarkdown
            .bind(this);
    }
    displayMarkdown(event) {
        this.setState({values: event.target.value});
    }

    plainHtml(value) {
        return marked(value);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <textarea
                        cols="50"
                        rows="25"
                        value={this.state.values}
                        onChange={this.displayMarkdown}/>
                </div>
                <div className="col-md-6">
                    <span
                        dangerouslySetInnerHTML={{
                        __html: this.plainHtml(this.state.values)
                    }}></span>
                </div>
            </div>
        )
    }
}

export default Form;