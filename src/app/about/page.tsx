import Link from 'next/link'
import styles from './styles.module.css'

export default function About() {
	return (
		<article className={styles.about}>
			<p>I'm a Software Engineer at <Link href="https://www.travelers.com/">Travelers Insurance</Link>.</p>
			<p>Before becoming a developer I played music, did social work, statistical computing, and made graphs as a data visualization specialist.</p>
			<p>I'm good at Node.js, React, stitching together AWS resources, UI and graphic design, and other program-y things.</p>
			<p>Click <Link href='/projects'>here</Link> to see my work.</p>
		</article>
	)
}
        