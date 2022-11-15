import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => this.setState({ urls: data.urls }))
    .catch(error => this.setState({ error: error }))  
  }

  // submitURL = (urlData) => {
  //   postURL(urlData)
  //   .then(getUrls()
  //   .then(updatedURLs => this.setState({urls: updatedURLs.urls}) )
  //   .catch(error => console.error("Something went wrong posting", error))
  //   )
  // }

  addUrl = (newUrl) => {
    postUrls(newUrl)
    .then(data => this.setState({ urls: [...this.state.urls, data]}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
