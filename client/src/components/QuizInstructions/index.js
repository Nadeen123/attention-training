import React, { Component, Fragment } from "react";
import Button from "../sharedComponent/Button";
import { connect } from "react-redux";
import BackButton from "../sharedComponent/BackButton";
import Card from "../Card";
import ProgressBar from "../sharedComponent/ProgressBar";
import image from "../../assets/quizInst.png";
import { bindActionCreators } from "redux";
import { incrementInstructionsCounter, decrementInstructionsCounter } from "../../actions";
class QuizInstructions extends Component {
  state = {
    instructions: [
      "Attention Training wants to help you live better. The first step is understanding whether or not you may have the superpowers of ADHD!",
      "In order to do this, we’ll ask a few questions to get to know you better. Don’t worry! It only takes about 3 minutes to complete.",
      "After you finish the quiz, we will provide you with the resources you need to harness your superpowers!",
      "Ready to get you know your superpowers?"
    ]
  };

  onClick = () => {
    this.props.incrementInstructionsCounter();
    if (this.props.instructionsCounter === 4) {
      this.props.history.push("/quiz");
    }
  };

  componentDidUpdate() {}
  render() {
    return (
      <Fragment>
        <div style={{ height: "42px", display: "flex" }}>
          <BackButton
            onClick={() => {
              if (this.props.instructionsCounter === 1) this.props.history.push("/");
              else this.props.decrementInstructionsCounter();
            }}
            margin="22px 0px 20px 20px"
          />
          <ProgressBar maxCounter={4}></ProgressBar>
          <Button
            margin="22px 20px 0px 0px"
            hoverColor="#70B1FA"
            background="#70B1FA"
            color="#000"
            border_radius="6px"
            width="30px"
            fontSize="14px"
            padding="2px 2px 0px 4px"
            desktoppadding="2px 2px 0px 4px"
            to="/quiz"
            onClick={() => {
              let i = this.props.instructionsCounter;
              while (i-- !== 1) {
                this.props.decrementInstructionsCounter();
              }
            }}
          >
            skip
          </Button>
        </div>
        <Card
          display="flex"
          onClick={this.onClick}
          bg={`url(${image}) space center whitesmoke`}
          color="#fff"
          info={
            <Fragment>
              <style>{`.ant-card-body{ margin:auto }`}</style>
              <p
                style={{
                  // height: "300px",
                  background: "#ffffffcc",
                  padding: "20px 10px",
                  margin: "28px 0px",
                  color: "#000",
                  "font-size": `${this.props.instructionsCounter === 3 ? "35px" : "24px"}`,
                  "font-weight": "bold"
                }}
              >
                {this.state.instructions[this.props.instructionsCounter - 1]}
              </p>
            </Fragment>
          }
        ></Card>
        <p
          style={{
            margin: "30px 0 0 0",
            display: "flex",
            "justify-content": "center"
          }}
        >
          {this.props.instructionsCounter < 3 ? "Tap the card to next" : "Tap the card to start"}
        </p>
      </Fragment>
    );
  }
}

const mapState = state => {
  return {
    instructionsCounter: state.instructionsCounter
  };
};

const mapAction = dispatch => {
  return bindActionCreators({ incrementInstructionsCounter, decrementInstructionsCounter }, dispatch);
};

export default connect(
  mapState,
  mapAction
)(QuizInstructions);
