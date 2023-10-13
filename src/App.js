import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import News from './components/News'
import Footer from './components/Footer';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=24;
  state={
      progress:0,
      articlesLoaded: false,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  handleArticlesLoaded = () => {
    this.setState({ articlesLoaded: true });
  }
  

  render() {
    return (
      <div className='body'>
        <Router>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      
      <Navbar/>
      <Header /> 
      <main className="main-content">
        <Sidebar />
        {/* <CategoryList />  */}
      <Routes> 
      {/* <Route path="/" element={<Sidebar />} /> */}
      <Route
      path="/News/:category"
      element={<News setProgress={this.setProgress}  />}
      />
          <Route exact path="/category/general" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general"/> }></Route>
         
          <Route exact path="/category/business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business"/> }></Route>
          <Route exact path="/category/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/> }></Route>
          
          <Route exact path="/category/health" element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health"/> }></Route>
          <Route exact path="/category/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports"/> }></Route>
          <Route exact path="/category/science" element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science"/> }></Route>
          <Route exact path="/category/technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="technology"/> }></Route>
          
          <Route path="/" element={ <News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="general"/>}></Route>
    </Routes>
    </main>
    {this.state.articlesLoaded && <Footer />} {/* Conditionally render the Footer */}
        
        </Router>  
      </div>
    )
  }
}


