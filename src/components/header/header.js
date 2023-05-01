'use client'

import { Title } from './title'
import { Navbar } from './navbar'
import './header.css'

export const Header = (props) => {
  return (
		<header id='header'>
			<Title />
			<Navbar
				// visible={props.visible}
				visible={true}
				fadeIn={props.fadeIn}
			/>
		</header>
  )
}
