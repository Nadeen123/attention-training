import React from "react";
import { connect } from "react-redux";
import {
  Container,
  ProgressBarDiv,
  ProgressBarStyle,
  Percent,
  ProgressPage,
  Description,
  TrueIcon,
  TrueIconBackground,
  Counter
} from "./style.CircleProgressBar";
import Button from "../Button";

class CircleProgressBar extends React.Component {
  state = {
    percent: 0
  };

  componentDidMount() {
    if (this.state.percent < 100 && this.props.percentRate === parseInt(50)) {
      setInterval(() => {
        if (this.state.percent < 50) {
          this.setState({ percent: this.state.percent + 1 });
        }
      }, 20);
    } else {
      if (this.state.percent < 100 && this.props.percentRate === parseInt(100)) {
        setInterval(() => {
          if (this.state.percent < 100) {
            this.setState({ percent: this.state.percent + 1 });
          }
        }, 20);
      }
    }
  }

  render() {
    return (
      <Container link={this.props.link}>
        <ProgressPage>
          <TrueIconBackground>
            <TrueIcon type="check-circle" theme="filled" twoToneColor="#70B1FA" />
          </TrueIconBackground>
          <ProgressBarDiv>
            <Percent>{this.props.percent}</Percent>
            <Counter>{this.props.counter - 1} of 18</Counter>
            <ProgressBarStyle type="circle" percent={this.state.percent} showInfo={false} fill="green" />
          </ProgressBarDiv>
          <Description>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </Description>
          <Button width="245px" onClick={this.props.onClick} to={this.props.to}>
            {/* name of button as a props {button} */}
            {this.props.buttonName}
          </Button>
        </ProgressPage>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(
  mapStateToProps,
  null
)(CircleProgressBar);
