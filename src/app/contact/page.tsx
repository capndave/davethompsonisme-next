import { ContactForm } from './contactForm'
import { Icons } from './icons'
// import { useWindowSize } from '../../hooks'
import styles from './page.module.css'

export default function Contact () {

  return (
		<article id={styles.contact}>
			<Icons />
			<ContactForm />
		</article>
  )
}