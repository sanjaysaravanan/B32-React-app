import { Component } from 'react';

class SampleComponent extends Component {

  constructor() {
    super();
    this.state = {
      word: 'Fox',
    }
  }

  // word = "Fox";

  handleClick = () => {
    console.log("OnClick Func")
    // this.word = 'Loin';
    this.setState({
      word: 'Loin'
    })
  }

  render () {
    console.log("Inside Class Component", this.props);
    function NewFunction () {
      return (
        <p>I am Function Component Inside Class Copmpoenrt</p>
      )
    }


    const { name, age } = this.props;

    return (
      <>
        <h1>Class Component</h1>
        <h2>{this.state.word}</h2>
        <button onClick={() => this.handleClick()} >Click Me to Change the above value</button>
      </>
    )
  };
}


export default SampleComponent;

