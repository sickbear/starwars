import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>Ooops...We cannot display data.</p>
    </>
  )
}

export default ErrorMessage