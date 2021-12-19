import ReactFCCtest from 'react-fcctest';
import './App.css';
import React, { Component } from 'react';
import { marked } from 'marked';

marked.setOptions({ breaks: true});

const placeholder =
{defaultState: `
Paragraph
**Bold Text**
> Block Quotes!
# Heading Size 1
## Heading Size 2
- List Item
- Another List Iterm
![Link](https://github.com/RoarAbiye)
\`\`\`javascript:
    var add2 = function(number) {
      return number + 2;
    }
\`\`\`
`};

class App extends Component { 
    constructor(props) {
        super(props);
        this.state = { markup: placeholder.defaultState};
        }

    handleChange = (evt) => {
        this.setState({markup: evt.target.value})
    };

    getMarkdownText() {
         var rawMarkup = marked.parse(this.state.markup);
         return { __html: rawMarkup };
    };

    render () {
        return (
            <wrapper id="wrapper">
            <ReactFCCtest />
            <div>
                <textarea id="editor" value={this.state.markup}  onChange={this.handleChange} />
                <div id="preview" value={this.state.markup} dangerouslySetInnerHTML={this.getMarkdownText()} />
            </div>
      </wrapper>
  )};
}

export default App;
