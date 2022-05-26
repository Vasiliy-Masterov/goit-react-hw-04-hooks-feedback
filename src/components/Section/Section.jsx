import styles from './Section.module.css';

export const Section = ({title, children}) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {children}
     </> 
);
}