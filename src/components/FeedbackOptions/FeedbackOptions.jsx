import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({onLeaveFeedback,options}) => {
  return (
    <div className={styles.list_button}>        
      {options.map(option => {
        return (
          <button type="button" onClick={onLeaveFeedback} className={styles.button} name={option} key={option}>{option}</button>
        );
      })}     
    </div>
  );
}