import { useState} from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import { Notification } from '../Notification';
  
export const Feedback = () => {
  
  const [good,setGood]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const [bad, setBad]=useState(0);
  
  const options=['good', 'neutral', 'bad'];

  const onLeaveFeedback = event => {
    const {name} = event.target;
   
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };
  
  const countTotalFeedback = () => {
    return good + neutral + bad;    
  };  
  
  const countPositiveFeedbackParcentage = () => {
    return Math.trunc(good * 100 / countTotalFeedback());    
  };
  
     
    return (
      <>
        <Section title="Please leave feedback">              
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback} 
            options={options}                 
          />  
        </Section>  
        {countTotalFeedback() === 0 ? 
         (<Notification message="There is no feedback"/>):
         (<Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveParcentage={countPositiveFeedbackParcentage()}
            />
          </Section>)}       
      </> 
    )                 
}

Feedback.propTypes = {
  Section: PropTypes.node,
  FeedbackOptions: PropTypes.node,
  Notification: PropTypes.node,
  Statistics: PropTypes.node,
}
