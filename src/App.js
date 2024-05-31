import React, { Component } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {

  PageSize = 12;
  state = {
     progress: 0
  }

  setProgress =(progress) =>{
       this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress}  key="general" pageSize={this.PageSize} country="in" category="general" />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress}  key="business" pageSize={this.PageSize} country="in" category="business" />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.PageSize} country="in" category="entertainment" />} />
            <Route exact path='/general' element={<News setProgress={this.setProgress}  key="general" pageSize={this.PageSize} country="in" category="general" />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress}  key="health" pageSize={this.PageSize} country="in" category="health" />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress}  key="science" pageSize={this.PageSize} country="in" category="science" />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress}  key="sports" pageSize={this.PageSize} country="in" category="sports" />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress}  key="technology" pageSize={this.PageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
