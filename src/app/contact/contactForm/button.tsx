import { MouseEventHandler } from 'react'
import styles from './button.module.css'

interface ButtonProps {
    name: string,
	// TODO: hook up onclick to send email
    onClick?: MouseEventHandler<HTMLButtonElement>,
    text: string,
}

const Button: React.FC<ButtonProps> = ({ name, onClick, text }) => (
	<button
		className={styles.button}
		name={name}
		onClick={onClick}
		tabIndex={0}
	> {text}
	</button>
)

export default Button