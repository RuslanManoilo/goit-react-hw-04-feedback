import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = evt => {
    const feedback = evt.currentTarget.id;

    if (feedback === 'good') {
      return setGood(() => (good + 1));
    } if (feedback === 'neutral') {
      return setNeutral(() => (neutral + 1));
    } else {
      return setBad(() => (bad + 1));
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Number((good / (countTotalFeedback())) * 100).toFixed();
  };

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      <Section title={"Statistics"}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};