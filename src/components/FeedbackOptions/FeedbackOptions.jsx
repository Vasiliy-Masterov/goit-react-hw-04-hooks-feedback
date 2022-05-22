import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad}) => {
  return (
    <div className={styles.list_button}>
      <button type="button" onClick={onLeaveFeedbackGood} className={styles.button} data='good'>Good</button>
      <button type="button" onClick={onLeaveFeedbackNeutral} className={styles.button} data='neutral'>Neutral</button>
      <button type="button" onClick={onLeaveFeedbackBad} className={styles.button} data='bad'>Bad</button>
    </div>
  );
}