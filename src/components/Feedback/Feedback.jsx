
import { Component } from 'react';
import styles from './Feedback.module.css';

  //const goodNumber = 2;
  //const neutralNumber = 3;
 // const badNumber = 5;
    
export class Feedback extends Component {
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

  countTotalFeedback =()=> {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;  
  }
  
  countPositivFeedbackParcentage = () => {
    const positivFeedbackParcentage = Math.trunc(this.state.good * 100 / this.countTotalFeedback());
    return positivFeedbackParcentage;
  }

  render() {

    
    return (
      <>
        <h2 className={styles.title}>Please leave feedback</h2>
        <div className={styles.list_button}>
          <button type="button" onClick={this.hadleIncrmentGood} className={styles.button} data='good'>Good</button>
          <button type="button" onClick={this.hadleIncrmentNeutral} className={styles.button} data='neutral'>Neutral</button>
          <button type="button" onClick={this.hadleIncrmentBad} className={styles.button} data='bad'>Bad</button>
        </div>
        <h2 className={styles.title}>Statistics</h2>
        <span className={styles.statistics_item}>Good: {this.state.good}</span>
        <span className={styles.statistics_item}>Neutral: {this.state.neutral}</span>
        <span className={styles.statistics_item}>Bad: {this.state.bad}</span>
        <span className={styles.statistics_item}>Total: {this.countTotalFeedback()}</span>
        <span className={styles.statistics_item}>Positive feedback: {this.countPositivFeedbackParcentage()} %</span>
      </>
    );
  }  
}




/*
const goodNumber = 2;
const neutralNumber = 3;
const badNumber = 5;

 
const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
  );

  class App extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод который будем передавать в Button для вызова при клике
  updateMessage = evt => {
    console.log(evt); // Доступен объект события
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}
<h2 className={styles.title}>Please leave feedback</h2>
      <div className={styles.list_button}>
        <Button/>
        <button type="button" className={styles.button} data='good'>Good</button>
        <button type="button" className={styles.button} data='neutral'>Neutral</button>
        <button type="button" className={styles.button} data='bad'>Bad</button>
      </div>  
      <h2 className={styles.title}>Statistics</h2>
      <span className={styles.statistics_item}>Good: {goodNumber}</span>
      <span className={styles.statistics_item}>Neutral: {neutralNumber}</span> 
      <span className={styles.statistics_item}>Bad: {badNumber}</span>

class MyClassComponent extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <div>Class Component</div>;
  }
}
*/