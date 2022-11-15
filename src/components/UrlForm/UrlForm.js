import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: '',
      submitted: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({submitted: true})
    if(this.state.title && this.state.urlToShorten) {
      this.props.addUrl({title: this.state.title, urlToShorten: this.state.urlToShorten})
    }
    this.clearInputs();
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }


  clearInputs = () => {
    this.setState({title: '', urlToShorten: '', submitted: false});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
