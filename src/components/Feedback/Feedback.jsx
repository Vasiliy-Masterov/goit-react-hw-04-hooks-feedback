import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import styles from './Feedback.module.css';
  
export class Feedback extends Component {
  static positivParcentage = 0;

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    test:0,
  }

  hadleIncrementGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  hadleIncrementNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  hadleIncrementBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  hadleIncrementTest = () => {
    this.setState(prevState => ({ test: prevState.test + 1 }));    
  };

  countTotalFeedback = () => {
    
    const total = this.state.good + this.state.neutral + this.state.bad + this.state.test;
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
          onLeaveFeedbackGood={this.hadleIncrementGood}
          onLeaveFeedbackNeutral={this.hadleIncrementNeutral}
          onLeaveFeedbackBad={this.hadleIncrementBad}
        />
        <button type="button" onClick={this.hadleIncrementTest} className={styles.button} data='test'>Test</button>
        
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positiveParcentage={this.countPositiveFeedbackParcentage()}
        />
        <span className={styles.statistics_item}>Test: {this.state.test}</span>
      </>
    );
  }  
}
