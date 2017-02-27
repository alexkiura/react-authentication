import React, {Component} from 'react';
import {Link} from 'react-router';
import Nav from './Nav';
import {getFoodData} from '../utils/chucknorris-api';

class FoodJokes extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }

  getFoodJokes() {
    getFoodData().then((jokes) => {
      this.setState({jokes});
    });
  }

  componentWillMount() {
    this.getFoodJokes();
  }

  render() {
    const { jokes } = this.state
    return (
      <div>
        <Nav />
        <h3 className="text-center">Chuck Norris food jokes</h3>
        <hr/>

        { jokes.map((joke, index) => (
          <div className="col-sm-6" key={index}>
             
          </div>
        )) }
      </div>
    )
  }
}