import { Component } from "react";
import './Styles/Button.css'

class Button extends Component {
  constructor() {
    super();

    this.state = {
      numberOfClicks: 0,
      salutation: 'Bom Dia ',
      clicked: false,
      numberOfClicksReverse: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  /* state = {
    numberOfClicks: 0,
  } */

  handleClick() {
    this.setState((prevState) => ({ numberOfClicks: prevState.numberOfClicks + 1, }), () => {
      const { numberOfClicks } = this.state;
      console.log(`Botão 1 ${this.getButtonColor(numberOfClicks)}`);
    });
  }

  /* handleClick2() {
    this.setState(() => ({ clicked: !this.state.clicked }),() => this.setState({salutation: this.state.clicked ? this.state.salutation + 'Galerinha!!!' : 'Bom Dia '}));
  } */

  handleClick2() {
    this.setState({salutation: this.state.salutation === 'Bom Dia ' ? this.state.salutation + 'Galerinha!!!' : 'Bom Dia '});
  }

  handleClick3() {
    this.setState((prevState) => ({ numberOfClicksReverse: prevState.numberOfClicksReverse - 1 }));
    const { numberOfClicksReverse } = this.state;
    console.log(`Botão 2 ${this.getButtonColor(numberOfClicksReverse)}`);
  }

  getButtonColor(num) {
    console.log(num);
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <div className="container">
        <button className="button" type="button" onClick={this.handleClick} style={ { backgroundColor: this.getButtonColor(this.state.numberOfClicks) } }>
          {this.state.numberOfClicks}
        </button>
        <button className="button" type="button" onClick={this.handleClick2}>
          {this.state.salutation}
        </button>
        <button className="button" type="button" onClick={this.handleClick3} style={ { backgroundColor: this.getButtonColor(this.state.numberOfClicksReverse) } }>
          {this.state.numberOfClicksReverse}
        </button>
      </div>
    );
  }
}

export default Button;
