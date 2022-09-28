import React from "react";
import { checkStringForGematriaValue } from "./utils/gematria";

export class Gematria extends React.Component<
  {},
  { inputValue: string; gemValue: number, shadowAnimation: boolean }
> {
  shadowAnimationState: NodeJS.Timeout | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: "שלום",
      gemValue: 0,
      shadowAnimation: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (ev: React.ChangeEvent) {
    if (ev.target instanceof HTMLInputElement) {
      this.setState({inputValue: ev.target.value})
    }
  }

  handleButtonClick () {
    this.setState({gemValue: checkStringForGematriaValue(this.state.inputValue)})

    const playAnimation = () => {
      this.setState({
        gemValue: checkStringForGematriaValue(this.state.inputValue),
        shadowAnimation: true,
      });
      this.shadowAnimationState = setTimeout(() => {this.setState({shadowAnimation: false})}, 2000);
    }

    if (this.shadowAnimationState && this.state.shadowAnimation === true) {
      clearTimeout(this.shadowAnimationState);
      this.setState({
        shadowAnimation: false});
        setTimeout(playAnimation,10);
        return;
    }
    playAnimation();

  }

  render() {
    return (
      <div className="gematria">
        <h2>גימטריה</h2>
        <div className="gem-container">
          <input onChange={this.handleInputChange} type="text" className="gem-input" value={this.state.inputValue}/>
          <button onClick={this.handleButtonClick} className="gem-calc">
            Calculate
          </button>
          <div className={"res-calc " + (this.state.shadowAnimation ? 'shadow-animation' : '')}>{this.state.gemValue}</div>
        </div>
        <p className="desc">
          "Gematryia" is the word numerical value calculation while summarizing
          the values of the letters of Hebrew alphabet. Enter your name in
          Hebrew and press the button - get value.
        </p>
      </div>
    );
  }
}
