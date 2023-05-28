import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'
import styles from './icons.module.css'

export const Icons = () => (
	<p id={styles['icons']}>
		<a
			aria-label="icon-email"
			className="icon icon-email"
			href="mailto:dave@davethompsonisme.com"
		>
			<FaEnvelope size="1rem" />
		</a>
		<a
			aria-label="icon-github"
			className="icon"
			href="https://github.com/capndave"
			target="_blank" rel="noreferrer"
		>
			<FaGithub size="1rem" />
		</a>
		<a
			aria-label="icon-linkedin"
			className="icon icon-linkedin"
			href="https://www.linkedin.com/in/davethompsonisme/"
			target="_blank" rel="noreferrer"
		>
			<FaLinkedin size="1rem" />
		</a>
	</p>
)
