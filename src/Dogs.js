import React, { Component } from 'react';

export default class Dogs extends Component {
  constructor() {
    super()
    this.state = {
      newdogs: {}
    }
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var self = this;

    fetch("/newdog", {
      method: "POST",
      data: {
        Name: self.refs.name,
        Breed: self.refs.breed,
        Age: self.refs.breed,
        Size: self.refs.breed
      }
    })
    .then((response) => {
      this.setState({
        newdogs: response
      });
    }).then((body) => {
      console.log(body);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Name' ref='Name' />
          <input type='text' placeholder='Breed' ref='Breed' />
          <input type='text' placeholder='Age' ref='Age' />
          <input type='text' placeholder='Size' ref='Size' />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}
