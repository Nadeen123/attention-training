import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { incrementCounter, decrementCounter } from "../../actions"
import Button from "../sharedComponent/Button"
import BackButton from "../sharedComponent/BackButton"
import Card from "../Card"
import ProgressBar from "../sharedComponent/ProgressBar"
import CircleProgressBar from "../sharedComponent/CircleProgressBar/"
import Close from "./closeButton"
import questions from "../../Questions"
import Swal from "sweetalert2"
import StyleSwal from "./swalStyle"
import { CardsAnimation } from "../Card/style"
import Confetti from "react-confetti"
import { bindActionCreators } from "redux"

class Quiz extends Component {
  state = {
    options: "",
    score: [],
    percent: 0,
    flag: 0, // this state is defined to refresh the page
    question: ""
  }

  /**
   * @param string value of choice
   * get value of choise to calclate score from {event.target,name}
   * push value to score array
   * increase counter 1
   * check half question and last question to show circle progress bar
   */
  clicked = ({ target }) => {
    const { name } = target
    const { score } = this.state
    score[this.props.counter - 1] = parseInt(name)
    this.props.incrementCounter()
    this.setState(
      {
        score: score,
        flag: 1
      },
      () => {
        this.setState({ flag: 0 })
      }
    )

    if (this.props.counter === 9) {
      this.setState({ percent: 50 })
    }
    if (this.props.counter === 18) {
      let inattentionScore = 0
      let hyperactivityScore = 0
      let totalScore = 0
      const { score } = this.state
      for (let i = 0; i < 9; ++i) inattentionScore += score[i]
      for (let i = 9; i < 18; ++i) hyperactivityScore += score[i]
      totalScore = inattentionScore + hyperactivityScore
      localStorage.setItem("inattentionScore", inattentionScore)
      localStorage.setItem("hyperactivityScore", hyperactivityScore)
      localStorage.setItem("totalScore", totalScore)
      localStorage.setItem("score", this.state.score)
      localStorage.setItem("complete", true)
      this.setState({ percent: 100 })
    }
  }
  close = () => {
    Swal.fire({
      title: "Are you sure you want to exit?",
      text:
        "your answers will be lost, you will not be able to know your ADHD type!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then(result => {
      if (result.value) {
        localStorage.clear()
        localStorage.setItem("complete", false)
        this.props.history.push("/dashboard")
      } else {
      }
    })
  }

  /**
   * @private
   */
  options() {
    const direction = ["right", "left"][parseInt(Math.random() * 2)]
    return (
      <Fragment>
        <Button
          colorhover="#fff"
          text_align="left"
          background={
            this.state.score[this.props.counter - 1] === 0 ? "#ED6237" : "#fff"
          }
          color={
            this.state.score[this.props.counter - 1] === 0 ? "#fff" : "#000"
          }
          box_shadow="unset"
          border="3px solid #E8EEF4"
          border_radius="20px"
          fontSize="20px"
          width="70%"
          name={0}
          value={"111111"}
          onClick={this.clicked}
        >
          A&nbsp; Never
        </Button>
        <Button
          colorhover="#fff"
          color={
            this.state.score[this.props.counter - 1] === 1 ? "#fff" : "#000"
          }
          text_align="left"
          background={
            this.state.score[this.props.counter - 1] === 1 ? "#ED6237" : "#fff"
          }
          box_shadow="unset"
          border="3px solid #E8EEF4"
          border_radius="20px"
          fontSize="20px"
          width="70%"
          name={1}
          onClick={this.clicked}
        >
          B&nbsp; Rarely
        </Button>
        <Button
          color={
            this.state.score[this.props.counter - 1] === 2 ? "#fff" : "#000"
          }
          colorhover="#fff"
          text_align="left"
          background={
            this.state.score[this.props.counter - 1] === 2 ? "#ED6237" : "#fff"
          }
          box_shadow="unset"
          border="3px solid #E8EEF4"
          border_radius="20px"
          fontSize="20px"
          width="70%"
          name={2}
          onClick={this.clicked}
        >
          C&nbsp; Sometimes
        </Button>
        <Button
          color={
            this.state.score[this.props.counter - 1] === 3 ? "#fff" : "#000"
          }
          text_align="left"
          colorhover="#fff"
          background={
            this.state.score[this.props.counter - 1] === 3 ? "#ED6237" : "#fff"
          }
          box_shadow="unset"
          border="3px solid #E8EEF4"
          border_radius="20px"
          fontSize="20px"
          width="70%"
          name={3}
          onClick={this.clicked}
        >
          D&nbsp; Often
        </Button>
        {this.props.counter > 1 ? (
          <CardsAnimation direction={direction} />
        ) : null}
      </Fragment>
    )
  }

  setCounter = () => {
    if (this.props.counter > 1) this.props.decrementCounter()
    else this.props.history.push("/quiz-instructions")
  }
  render() {
    console.log(this.props.counter, "00")
    const question = questions[this.props.counter - 1]
    let { counter } = this.state
    return this.state.flag ? null : this.state.percent === 50 ? (
      <CircleProgressBar
        counter={counter - 1}
        percentRate={50}
        percent="50%"
        title="Good job!"
        description=" you are half way there."
        buttonName="LET’S KEEP GOING!"
        onClick={() => {
          this.setState({ percent: 51 })
        }}
      />
    ) : this.state.percent === 100 ? (
      <Fragment>
        <Confetti
          style={{
            width: "100%"
          }}
        />
        <CircleProgressBar
          counter={counter - 1}
          percentRate={100}
          percent="100%"
          title="You are awesome!"
          description="We’re completing your profile now."
          to={{
            pathname: "/result",
            state: { flag: true }
          }}
          buttonName="See result"
          onClick={() => {
            this.setState({ percent: 101 })
          }}
        />
      </Fragment>
    ) : (
      <div style={{ textAlign: "center" }}>
        <StyleSwal />
        <div>
          <BackButton
            margin="22px 29px 0px 11px"
            position="absolute"
            onClick={this.setCounter}
            history={this.props.history}
          ></BackButton>
          <Close type="close" onClick={this.close} />
          <ProgressBar
            margin="auto 10%"
            counter={this.props.counter}
          ></ProgressBar>
        </div>
        <Card
          question={question}
          options={this.options()}
          className={this.props.counter !== 10 ? "slide-card" : null}
          info={
            <div>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "10px",
                  height: "90px",
                  padding: "8px 20px"
                }}
              >
                {question}
              </p>
              <br />
              {this.options()}
            </div>
          }
        ></Card>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapAction = dispatch => {
  return bindActionCreators({ incrementCounter, decrementCounter }, dispatch)
}

export default connect(
  mapStateToProps,
  mapAction
)(Quiz)
