// REACT
import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';

class App extends React.Component{

  state={
    messages: {}
  }

  addMessage = message => {
    // Copier le state
    const messages = {...this.state.messages};
    // On ajoute le message avec une clé timestamp
    const timestamp = Date.now();
    messages[`message-${timestamp}`] = message;
    // Mettre a jour le state
    this.setState({messages});
  };

  render() {
    return (
      <div className="box">
        <div className="messages">
          <Message pseudo={this.props.params.pseudo} />
        </div>
        <Formulaire addMessage={this.addMessage} />
      </div>
    )
  }
}

export default App;
