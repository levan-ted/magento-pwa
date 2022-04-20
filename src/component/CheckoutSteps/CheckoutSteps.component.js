import PropTypes from "prop-types";
import { PureComponent } from "react";
import checkIconUrl from "./assets/check.svg";
import "./CheckoutSteps.style";

export class CheckoutSteps extends PureComponent {
  static propTypes = {
    checkoutStep: PropTypes.text?.isRequired,
  };

  getRandomKey() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const getRandLetter = () =>
      letters[Math.trunc(letters.length * Math.random())];
    return [...new Array(7)].map((el) => getRandLetter()).join("");
  }

  renderProgressBar() {
    const idx =
      this.props.steps.findIndex((el) => el.name === this.props.checkoutStep) +
      1;
    const percentage = (idx / this.props.steps.length).toFixed(2) * 100;
    return (
      <>
        <span block="ProgressBar">
          <span
            key={this.getRandomKey()}
            style={{ width: `${percentage}%` }}
          ></span>
        </span>
        {this.props.steps.slice(0, -1).map((step, i) => {
          const isCompleted = idx > i + 1;
          return (
            <div block="Phase">
              <span block={isCompleted ? "CompletedStep" : "NotCompletedStep"}>
                {isCompleted ? <img src={checkIconUrl} alt="Y" /> : i + 1}
              </span>
              <p>{step.title}</p>
            </div>
          );
        })}
      </>
    );
  }

  render() {
    return <div block="CheckoutSteps">{this.renderProgressBar()}</div>;
  }
}

export default CheckoutSteps;
