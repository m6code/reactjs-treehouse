import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      gifs: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then((response) => {
        this.setState({ gifs: response.data.data, loading: false });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data ', error)
      })
  }

  performSearch = (q) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${q}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then((response) => {
        this.setState({ gifs: response.data.data, loading: false });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data ', error)
      })
  }


  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {
            (this.state.loading)
            ? <h3>Loading</h3>
            : <GifList data={this.state.gifs} />
        }
        </div>
      </div>
    );
  }
}
