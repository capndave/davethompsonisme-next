import styles from './validationMessage.module.css'

interface ValidationMessageProps {
  message?: string
}

const ValidationMessage: React.FC<ValidationMessageProps> = ({ message = 'Mandatory Field' }) => {
  return (
		<span id={styles.validationMessage}>{message ?? 'missing'}</span>
  )
}

export default ValidationMessage
