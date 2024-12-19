import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

/*By adding a unique key prop to each route, you ensure that React unmounts the old <News /> component 
and mounts a new one, solving the issue of data not fetching when navigating links. 
This approach forces React to treat each route as a new component instance. */

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes> 

            <Route exact path="/" element = {<News key="general" pageSize={9} category="general"/>}/>
            <Route exact path="/business"element = {<News key="business" pageSize={9} category="business"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} category="entertainment"/>}/>
            <Route exact path="/health"element = {<News key="health" pageSize={9} category="health"/>}/>
            <Route exact path="/politics" element = {<News key="politics" pageSize={9} category="politics"/>}/>
            <Route exact path="/sports" element = {<News key="sports" pageSize={9} category="sports"/>}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={9} category="technology"/>}/>
            <Route exact path="/science" element = {<News key="science" pageSize={9} category="science"/>}/>
      </Routes>
        </Router>
      </div>
    )
  }
}


        
        
      