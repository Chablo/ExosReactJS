import React from 'react';
import { render } from 'react-dom';
//CSS
import './style/css/bootstrap.min.css';
import './index.css';
//JS PERSO
import { sampleText } from './sampleText.js';
//Marked.js
import marked from 'marked';

class App extends React.Component {

  state = {
    text: sampleText
  };

  // React fonctions
  componentWillMount(){
    const text = localStorage.getItem('text');
    if (text){
      this.setState({text});
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('text', nextState.text);
  }

  // Fonctions persos
  editText = (event) => {
      const text = event.target.value;
      this.setState({text});
  };

  renderText = (text) => {
    const renderText = marked(text, {sanitize: true});
    return {__html: renderText};
  };

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-6">
            <textarea
              value={this.state.text}
              rows="35"
              className="form-control"
              onChange={(e) => this.editText(e)}>
            </textarea>
          </div>

          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
          </div>

        </div>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);
