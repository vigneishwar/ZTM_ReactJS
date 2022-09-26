import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: {firstname: 'vicky', lastname: 'charms'},
      company: 'BRYK'
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState({name: {firstname: 'shalu', lastname: 'vikki'}}); // passing objects to setState. Always make sure that the setState method has the same shape as state
            console.log(this.state)
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          }}> 
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;