import React, { Fragment } from "react";
import BackButton from "../sharedComponent/BackButton";
import {
  Header,
  DashboardCard,
  Icon,
  Title,
  Text,
  Titlewrap,
  PageWrapper,
  Buttuns,
  RestartImg,
  AboutImg
} from "./DashboardStyledComponent";
import cardLogo from "../../assets/icon.png";
import secondLogo from "../../assets/icon2.png";
import StyledLink from "../sharedComponent/Button";
import restartVector from "../../assets/restart.png";
import aboutUs from "../../assets/AboutUs.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { restart } from "../../actions";

const Dashboard = ({ history, ...props }) => {
  return (
    <Fragment>
      <BackButton history={history}></BackButton>
      <PageWrapper>
        <Header>Dashboard</Header>
        {props.isCompleted ? (
          <Fragment>
            {/* card1 */}
            <DashboardCard>
              <Titlewrap>
                <Icon alt="cardlogo" src={cardLogo} />
                <Title>Superpower subtype</Title>
              </Titlewrap>
              <Text>Revisit your ADHD subtype</Text>
              <StyledLink
                background="#70B1FA"
                width="172px"
                fontSize="20px"
                desktoppadding="15px 15px"
                to={{
                  pathname: "/result",
                  state: { flag: false }
                }}
              >
                SEE RESULT
              </StyledLink>
            </DashboardCard>
            {/* card2 */}
            <DashboardCard>
              <Titlewrap>
                <Icon alt="cardlogo" src={secondLogo} />
                <Title>The Basics</Title>
              </Titlewrap>
              <Text>Find Basics information about ADHD</Text>
              <StyledLink
                background="#70B1FA"
                width="172px"
                fontSize="20px"
                desktoppadding="15px 15px"
                to="/basic-info"
              >
                SEE BASICS
              </StyledLink>
            </DashboardCard>{" "}
          </Fragment>
        ) : null}

        {/* card3 */}
        <DashboardCard>
          <Titlewrap>
            <Icon alt="cardlogo" src={cardLogo} />
            <Title>Superpower Skills</Title>
          </Titlewrap>
          <Text>Find and harness your own superpowers</Text>
          <StyledLink width="172px" fontSize="19px" to="/skills" background="#70B1FA" desktoppadding="15px 15px">
            SEE SUPERPOWER
          </StyledLink>
        </DashboardCard>
        {/* buttons */}
        <Buttuns>
          <StyledLink background="#AA27D6" width="173px" fontSize="20px" to="/quiz" onClick={props.restart}>
            <RestartImg src={restartVector} />
            RESTART TEST
          </StyledLink>
          <StyledLink background="#ED6237" width="172px" fontSize="20px" to="/about-us">
            <AboutImg src={aboutUs} />
            ABOUT US
          </StyledLink>
        </Buttuns>
      </PageWrapper>
    </Fragment>
  );
};

const mapAction = dispatch => {
  return bindActionCreators({ restart }, dispatch);
};
const mapState = state => ({
  isCompleted: state.isCompleted
});
export default connect(
  mapState,
  mapAction
)(Dashboard);
