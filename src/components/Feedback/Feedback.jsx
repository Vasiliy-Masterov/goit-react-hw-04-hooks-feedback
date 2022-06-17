import { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';

import { Notification } from '../Notification';
  
export class Feedback extends Component {
  static positivParcentage = 0;

  state = {
    good: 0,
    neutral: 0,
    bad: 0,   
  } 
  
  
  onLeaveFeedback = event => {
    const {name} = event.target;
    this.setState(prevState => ({[name]: prevState[name] + 1 }));
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;    
  };
  
  countPositiveFeedbackParcentage = () => {
    return Math.trunc(this.state.good * 100 / this.countTotalFeedback());    
  };
  
  render()
  {      
    return (
      <>
        <Section title="Please leave feedback">              
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback} 
            options={Object.keys(this.state)}                 
          />  
        </Section>  

        {this.countTotalFeedback() === 0 ? 
         (<Notification message="There is no feedback"/>):
         (<Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveParcentage={this.countPositiveFeedbackParcentage()}
            />
          </Section>)}
        
      </> 
    )
  }                 
}

Feedback.propTypes = {
  Section: PropTypes.node,
  FeedbackOptions: PropTypes.node,
  Notification: PropTypes.node,
  Statistics: PropTypes.node,
}
