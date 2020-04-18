import React from 'react';
import '../styles/main.scss';
import fetchShows from './services/FetchData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:[]
    }
  }

componentDidMount(){
    fetchShows()
      .then(data => {
        this.setState ({
          data:data
        })
      })
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
