import Link from 'next/link'
import './navbar.css'

export function Navbar() {
	return (
		<nav
			className={`display-flex justify-content-space-around width-100pct`}>
			<Link href="/about" >about</Link>
			<Link href="/blog" >blog</Link>
			<Link href="/contact" >contact</Link>
			<Link href="/projects" >projects</Link>
		</nav>
	)
}
