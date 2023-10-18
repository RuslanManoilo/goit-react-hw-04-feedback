import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";

class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  };


  addFeedback = (evt) => {
    const option = evt.currentTarget.id;
    
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Number((this.state.good / (this.countTotalFeedback())) * 100).toFixed();
  };

  render() {
      return (
        <>
          <Section title = { "Please leave feedback" }>
              <FeedbackOptions 
                options = { Object.keys(this.state) }
                onLeaveFeedback = { this.addFeedback } 
              />
          </Section>

          <Section title = { "Statistics" }>
              <Statistics 
                good = { this.state.good } 
                neutral = { this.state.neutral } 
                bad = { this.state.bad } 
                total = { this.countTotalFeedback() } 
                positivePercentage = { this.countPositiveFeedbackPercentage() } 
              />
          </Section>
        </>
      )
  }
};

export default App;