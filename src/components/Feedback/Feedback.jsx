import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import styles from './Feedback.module.css';
  
export class Feedback extends Component {
  static positivParcentage = 0;

  state = {
    good: 0,
    neutral: 0,
    bad:0,
  }

  hadleIncrmentGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  hadleIncrmentNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  hadleIncrmentBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;  
  }
  
  countPositiveFeedbackParcentage = () => {
    const positiveParcentage = Math.trunc(this.state.good * 100 / this.countTotalFeedback());
    return positiveParcentage;
  }

  render() {
    
    return (
      <>
        <h2 className={styles.title}>Please leave feedback</h2>
        
        <FeedbackOptions
          hadleIncrmentGood={this.hadleIncrmentGood}
          hadleIncrmentNeutral={this.hadleIncrmentNeutral}
          hadleIncrmentBad={this.hadleIncrmentBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positiveParcentage={this.countPositiveFeedbackParcentage()}
        />
      </>
    );
  }  
}
