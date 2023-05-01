import React from 'react'
import './Icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Icons = () => (
	<p id='icons'>
		<a
			aria-label="icon-email"
			alt="email"
			className="icon icon-email"
			href="mailto: dave@davethompsonisme.com"
		>
			<FontAwesomeIcon icon={faEnvelope} size="1x" />
		</a>
		<a
			aria-label="icon-github"
			alt="github"
			className="icon"
			href="https://github.com/capndave"
			target="_blank" rel="noreferrer"
		>
			<FontAwesomeIcon
				icon={faGithub}
				size="1x"
			/>
		</a>
		<a
			aria-label="icon-linkedin"
			alt="linkedin"
			className="icon icon-linkedin"
			href="https://www.linkedin.com/in/davethompsonisme/"
			target="_blank" rel="noreferrer"
		>
			<FontAwesomeIcon icon={faLinkedin} size="1x" />
		</a>
	</p>
)

export default Icons
