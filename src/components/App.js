import React from 'react';
import '../styles/main.scss';
import fetchShows from './services/FetchData.js';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import FilterCheckbox from './FilterCheckbox';
import FilterInput from './FilterInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.renderShowDetails = this.renderShowDetails.bind(this);
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

  handleCheckbox() {
    this.setState(prevState => {
      return {
        isRunning: !prevState.isRunning
      }
    })
  }

/*

  renderShowDetails(props){
    console.log(props)
    const urlId = props.match.params.id;
    const shows = this.state.data;
    for(let showObject of shows) {
      if(showObject.id === parseInt(urlId)) {
        return <ShowDetails show={showObject}/>
      }
    }
  }
*/

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
