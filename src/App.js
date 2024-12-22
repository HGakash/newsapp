import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar'; 
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import validKey from './components/apiKeyHandler.mjs';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



/*By adding a unique key prop to each route, you ensure that React unmounts the old <News setProgress = {setProgress} /> component 
and mounts a new one, solving the issue of data not fetching when navigating links. 
This approach forces React to treat each route as a new component instance. */

const App = () => {
  
const [progress, setProgressState] = useState(0)
const getKey  =  async () => {
    const apiKey = await validKey();
    return apiKey;
  }
  // apiKey = process.env.REACT_APP_MY_API_1;

 const  setProgress = (progress)  => {
    setProgressState(progress)
  }
    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar 
           height={3}
           color='#f11946'
           progress = {progress}
          //  onLoaderFinished={() => setProgress(0)}
          />
          <Routes> 
            <Route exact path="/" element = {<News setProgress = {setProgress} getKey = {getKey}  key="general" pageSize={9} category="general"/>}/>
            <Route exact path="/business"element = {<News setProgress = {setProgress} getKey = {getKey} key="business" pageSize={9} category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress = {setProgress} getKey = {getKey} key="entertainment" pageSize={9} category="entertainment"/>}/>
            <Route exact path="/health"element = {<News setProgress = {setProgress} getKey = {getKey} key="health" pageSize={9} category="health"/>}/>
            <Route exact path="/politics" element = {<News setProgress = {setProgress} getKey = {getKey} key="politics" pageSize={9} category="politics"/>}/>
            <Route exact path="/sports" element = {<News setProgress = {setProgress} getKey = {getKey} key="sports" pageSize={9} category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress = {setProgress} getKey = {getKey} key="technology" pageSize={9} category="technology"/>}/>
            <Route exact path="/science" element = {<News setProgress = {setProgress} getKey = {getKey} key="science" pageSize={9} category="science"/>}/>
      </Routes>
        </Router>
      </div>
    )
  
}

export default App


