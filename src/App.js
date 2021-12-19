import ReactFCCtest from 'react-fcctest';
import './App.css';
import React, { Component } from 'react';
import { marked } from 'marked';

marked.setOptions({ breaks: true});

const placeholder =
{defaultState: `
# Heading Size H1
## Heading Size H2
### Heading Size H3
#### Heading Size H4
##### Heading Size H5
###### Heading Size h6

This is a Paragraph!

**Bold Text** 

_italic text_


> Block Quotes!

- List Item
- Another List Item
  - Nested List Item

1. Number list item
2. Another item in Number list item

- [x] DONE! Task list item
- [ ] TODO! Task list item

A link:
[Check Out My Github Account](https://github.com/RoarAbiye)

An Image:
![image](https://picsum.photos/200)

In line Code quote
\`print(inline code)\`

A block of code:
\`\`\`javascript
   function addNums (num1, num2) {
      console.log(num1+num2);
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
            <div id="editor-group">
            <h2 className="heading">Input</h2>
                <textarea id="editor" value={this.state.markup}  onChange={this.handleChange} />
            </div>
            <div id="preview-group">
            <h2 className="heading"> Markdown preview</h2>
                <div id="preview" value={this.state.markup} dangerouslySetInnerHTML={this.getMarkdownText()} />
            </div>
      </wrapper>
  )};
}

export default App;
