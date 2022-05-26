import styles from './Notification.module.css';

export const Notification = ({message}) => {
  return (
    <>
      <h2 className={styles.message}>{message}</h2>
    </>
  )
};