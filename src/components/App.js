import React from 'react';
import '../styles/main.scss';
import fetchShows from './services/FetchData.js';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import FilterCheckbox from './FilterCheckbox';
import FilterInput from './FilterInput';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderShowDetails = this.renderShowDetails.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.renderShowDetails = this.renderShowDetails.bind(this);
    this.state = {
      data: [],
      inputValue: '',
      isRunning: false
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


  handleInput(currentTargetValue) {
    this.setState({ inputValue: currentTargetValue })
  }

   renderShowDetails(props){
    console.log(props)
    const urlId = props.match.params.id;
    const dataCardShow = this.state.data;
    for(let cardShow of dataCardShow) {
      if(cardShow.id === parseInt(urlId)) {
        return <ShowDetails shows={cardShow}/>
      }
    }
  }

  render() {
    const {isRunning} = this.state;
    return (
      <div className="App wrapper">
        <Switch>
          
          <Route exact path="/">
            <div className="header container">
               <i class="fas fa-tv"></i>
               <h1 className="header-title">Series Finder</h1>
            </div>
            <div className="container-aside-main">
              <div className="aside container">
                <FilterInput handleInput={this.handleInput}
                          inputValue={this.state.inputValue}/>
                <FilterCheckbox handleCheckbox={this.handleCheckbox} 
                             isRunning={isRunning}/>
              </div>
             <ShowList isRunning={this.state.isRunning} 
                       data={this.state.data}
                       handleInput={this.handleInput}
                       inputValue={this.state.inputValue}
                        />
              </div>
            }
           
          </Route>
         
          <Route path="/cardShow/:id" render={this.renderShowDetails}/>
    
        </Switch>
        </div>
   
  );
}
}

export default App;
