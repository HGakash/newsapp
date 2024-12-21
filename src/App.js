import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

/*By adding a unique key prop to each route, you ensure that React unmounts the old <News setProgress = {this.setProgress} /> component 
and mounts a new one, solving the issue of data not fetching when navigating links. 
This approach forces React to treat each route as a new component instance. */

export default class App extends Component {
  
  state = {
      progress:0
  }

  setProgress = (progress)  => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar 
           height={3}
           color='#f11946'
           progress = {this.state.progress}
          //  onLoaderFinished={() => setProgress(0)}
          />
          <Routes> 

            <Route exact path="/" element = {<News setProgress = {this.setProgress}  key="general" pageSize={9} category="general"/>}/>
            <Route exact path="/business"element = {<News setProgress = {this.setProgress} key="business" pageSize={9} category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} key="entertainment" pageSize={9} category="entertainment"/>}/>
            <Route exact path="/health"element = {<News setProgress = {this.setProgress} key="health" pageSize={9} category="health"/>}/>
            <Route exact path="/politics" element = {<News setProgress = {this.setProgress} key="politics" pageSize={9} category="politics"/>}/>
            <Route exact path="/sports" element = {<News setProgress = {this.setProgress} key="sports" pageSize={9} category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} key="technology" pageSize={9} category="technology"/>}/>
            <Route exact path="/science" element = {<News setProgress = {this.setProgress} key="science" pageSize={9} category="science"/>}/>
      </Routes>
        </Router>
      </div>
    )
  }
}




        
        
      