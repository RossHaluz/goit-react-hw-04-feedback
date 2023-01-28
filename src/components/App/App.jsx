import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const result = good + neutral + bad;

    return result;
  };

  const countPositiveFeedbackPercentage = good => {
    return ((good / countTotalFeedback()) * 100).toFixed();
  };

  const optionsState = ['good', 'neutral', 'bad'];

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={optionsState}
        onLeaveFeedback={onLeaveFeedback}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage(good)}
      />
    </Section>
  );
};

export default App;
