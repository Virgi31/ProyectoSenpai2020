import React from 'react';
import ReactDOM from 'react-dom';

class Contacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
        <div className="contacto">
        <form onSubmit={this.mySubmitHandler}>
      <h1>
          ¿Cómo podemos ayudarte?
      </h1>
      <br/>
      <br/>
      <br/>
      <p>Enter your name:</p>
      <br/>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
       <br/>
       <br/>
      <p>Enter your age:</p>
      <br/>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <br/>
      <textarea value={this.state.description} />
      <br/>
      <br/>
      <br/>
      <input type='submit' />
      </form>
      </div>
    );
  }
}

ReactDOM.render(<Contacto />, document.getElementById('root'));

export default Contacto;