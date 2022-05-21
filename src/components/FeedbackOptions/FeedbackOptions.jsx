import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({hadleIncrmentGood,hadleIncrmentNeutral,hadleIncrmentBad}) => {
  return (
      <div className={styles.list_button}>
      <button type="button" onClick={hadleIncrmentGood} className={styles.button} data='good'>Good</button>
      <button type="button" onClick={hadleIncrmentNeutral} className={styles.button} data='neutral'>Neutral</button>
      <button type="button" onClick={hadleIncrmentBad} className={styles.button} data='bad'>Bad</button>
    </div>
  );
}